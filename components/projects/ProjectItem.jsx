import { RichText } from "prismic-reactjs";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { SKILLS } from "shared/constants";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import Image from "next/image";

const ProjectItem = ({ project }) => {
  const id = project.id;
  const carousel = project.data.carousel;
  const title = RichText.asText(project.data.title) ?? null;
  const description = RichText.asText(project.data.description) ?? null;
  const techStack = project.data.tech_stack;
  // console.log(carousel);

  return (
    <div
      key={id}
      className="flex flex-col overflow-hidden lg:flex-row lg:even:flex-row-reverse border-gray-100 border-2 p-4 rounded-xl shadow b-4 bg-white
      dark:border-gray-800 dark:bg-gray-900
      "
    >
      <div className="flex items-center justify-center flex-1">
        {carousel[0].image.url && (
          <Carousel showIndicators infiniteLoop showThumbs={false}>
            {carousel.map(
              ({
                image: {
                  url,
                  alt,
                  dimensions: { width, height },
                },
              }) => (
                <img
                  src={url}
                  alt={alt}
                  key={url}
                  layout="fill"
                  // width={width}
                  // height={height}
                  loading="lazy"
                />
              )
            )}
          </Carousel>
        )}
      </div>
      <div className="flex flex-col justify-center flex-1 px-6 py-12 dark:bg-coolGray-900">
        <span className="text-xs uppercase dark:text-coolGray-400 flex mb-2">
          {techStack.map(({ stack }) => (
            <img
              alt={stack}
              src={SKILLS[stack]}
              key={stack}
              className="mr-2 h-6"
            />
          ))}
        </span>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="my-6 dark:text-coolGray-400">{description}</p>
        {/* <button className="self-start">Action</button> */}
      </div>
    </div>
  );
};

export default ProjectItem;
