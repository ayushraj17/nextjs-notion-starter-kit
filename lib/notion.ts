import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap, SearchParams, SearchResults } from 'notion-types'
import { getPreviewImages } from './get-preview-images'
import { mapNotionImageUrl } from './map-image-url'
import { fetchTweetAst } from 'static-tweets'
import pMap from 'p-map'

export const notion = new NotionAPI({
  apiBaseUrl: process.env.NOTION_API_BASE_URL
  // activeUser: '330f017b-5251-4e72-886d-f38e82e56741',
  // authToken:
  // 'aa8763224092ee79ed61b6f6b64d00de7da5b018e761b93ec06e15f040996dc1bc76f4c9a37fcb424a46c74c2dfa94d246144469bbfdb2bd581b468dfc95569d00b7a4327c222e90e462fec77f62'
})

export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  const recordMap = await notion.getPage(pageId)
  const blockIds = Object.keys(recordMap.block)

  const imageUrls: string[] = blockIds
    .map((blockId) => {
      const block = recordMap.block[blockId]?.value

      if (block) {
        if (block.type === 'image') {
          const source = block.properties?.source?.[0]?.[0]

          if (source) {
            return {
              block,
              url: source
            }
          }
        }

        if ((block.format as any)?.page_cover) {
          const source = (block.format as any).page_cover

          return {
            block,
            url: source
          }
        }
      }

      return null
    })
    .filter(Boolean)
    .map(({ block, url }) => mapNotionImageUrl(url, block))
    .filter(Boolean)

  const urls = Array.from(new Set(imageUrls))
  const previewImageMap = await getPreviewImages(urls)
  ;(recordMap as any).preview_images = previewImageMap

  const tweetIds: string[] = blockIds
    .map((blockId) => {
      const block = recordMap.block[blockId]?.value

      if (block) {
        if (block.type === 'tweet') {
          const src = block.properties?.source?.[0]?.[0]

          if (src) {
            const id = src.split('?')[0].split('/').pop()
            if (id) return id
          }
        }
      }

      return null
    })
    .filter(Boolean)

  const tweetAsts = await pMap(
    tweetIds,
    async (tweetId) => {
      try {
        return {
          tweetId,
          tweetAst: await fetchTweetAst(tweetId)
        }
      } catch (err) {
        console.error('error fetching tweet info', tweetId, err)
      }
    },
    {
      concurrency: 4
    }
  )

  const tweetAstMap = tweetAsts.reduce((acc, { tweetId, tweetAst }) => {
    if (tweetAst) {
      return {
        ...acc,
        [tweetId]: tweetAst
      }
    } else {
      return acc
    }
  }, {})

  ;(recordMap as any).tweetAstMap = tweetAstMap

  return recordMap
}

export async function search(params: SearchParams): Promise<SearchResults> {
  return notion.search(params)
}
