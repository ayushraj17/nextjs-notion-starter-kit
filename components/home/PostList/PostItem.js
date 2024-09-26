import React from "react";
import { default as NextLink } from "next/link";
import { RichText } from "prismic-reactjs";

import PostDate from "./PostDate";
import FirstParagraph from "./FirstParagraph";
import { hrefResolver, linkResolver } from "prismic-configuration";

/**
 * Post list item component
 */
const PostItem = ({ post }) => {
  const title = RichText.asText(post.data.title)
    ? RichText.asText(post.data.title)
    : "Untitled";
  const description = RichText.asText(post.data.description) ?? null;

  return (
    <NextLink as={linkResolver(post)} href={hrefResolver(post)}>
      <a
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-coolGray-800  dark:border-0 hover:shadow-lg 

      border-gray-100 border-2  rounded-xl shadow b-4 bg-white
      transition-all transform duration-300 ease-in-out
			"
      >
        {/* <img
					role="presentation"
					className="object-cover w-full rounded h-44"
					src="https://source.unsplash.com/random/484x364"
				/> */}
        {/* {TODO: add image here} */}
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <PostDate date={post.data.date} className="relative post" />
          <p>{description}</p>

          {/* <FirstParagraph sliceZone={post.data.body} textLimit={300} /> */}
        </div>
      </a>
    </NextLink>
  );
};

export default PostItem;
