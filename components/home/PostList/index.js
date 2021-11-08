import React from "react";
import PostItem from "./PostItem";
// import { postListStyles } from 'styles'

/**
 * Post list component
 */
const PostList = ({ posts }) => {
  return (
    <div
      className={`grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 
		${posts.length <= 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}
    >
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
      {/* <style jsx global>
				{postListStyles}
			</style> */}
    </div>
  );
};

export default PostList;
