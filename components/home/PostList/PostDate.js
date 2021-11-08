import React from "react";
import { Date } from "prismic-reactjs";

/**
 * Post list item date component
 */
const PostDate = ({ date, className }) => {
	// Format the date to M d, Y
	const dateFormat = {
		month: "short",
		day: "2-digit",
		year: "numeric",
	};
	const displayDate = new Intl.DateTimeFormat("en-US", dateFormat).format(
		Date(date)
	);

	return (
		<>
			<time className={`text-md dark:text-coolGray-400 ${className}`}>
				{displayDate}
			</time>
		</>
	);
};

export default PostDate;
