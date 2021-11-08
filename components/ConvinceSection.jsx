import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faVial,
	faSearch,
	faSitemap,
	faPencilRuler,
	faLaptopCode,
	faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const pathVariant = {
	initial: {
		y: 10,
		scale: 0.8,
		opacity: 0,
	},
	animate: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 2,
			type: "spring",
		},
	},
};

const ConvinceSection = () => {
	const data = [
		{
			id: 1,
			title: "Website Review",
			icon: faSearch,
			description:
				"I make sure your website is performing its best by thoroughly reviewing it before making any changes.",
		},
		{
			id: 2,
			title: "Business Strategy",
			icon: faSitemap,
			description:
				"We discuss what you are trying to achieve, and place goals on your website planning how to achieve that.",
		},
		{
			id: 3,
			title: "User Experience Design",
			icon: faPencilRuler,
			description:
				"I design your website to be as easy to use as possible while guiding users towards the end goal.",
		},

		{
			id: 4,
			title: "Tailored Development",
			icon: faLaptopCode,
			description:
				"I build with your goals in mind, whether you want a simple flexible website, a custom storefront or a SaaS product.",
		},
		{
			id: 5,
			title: "Rigorous Testing",
			icon: faVial,
			description:
				"I ensure your website is of excellent quality by thoroughly testing using multiple approaches.",
		},
		{
			id: 6,
			title: "Ongoing Support",
			icon: faHeadset,
			description:
				"Your website is always growing. Whether you’re adding new features or making improvements I’m here to help.",
		},
		// {
		// 	id:
		// 	title:
		// 	icon:
		// 	description:
		// },
	];
	const { ref, inView } = useInView();

	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 my-10 md:my-20 mx-auto">
				<div className="flex flex-wrap w-full mb-10 md:mb-20 flex-col items-center text-center">
					<h1>Everything you need to build your website</h1>

					{/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
						A completed solution
					</p> */}
				</div>
				<div className="flex flex-wrap -m-4" ref={ref}>
					{data.map(({ id, title, icon, description }) => (
						<motion.div
							className="xl:w-1/3 md:w-1/2 p-4"
							variants={pathVariant}
							initial="initial"
							animate={inView ? "animate" : "initial"}
							key={id}
						>
							<div className="border border-gray-200  bg-gradient-to-r dark:from-gray-800 dark:to-gray-800 dark:border-opacity-0 p-6 rounded-lg shadow-sm">
								<div className="flex items-center mb-6 text-indigo-500">
									<FontAwesomeIcon
										icon={icon}
										className="fa-lg"
										initial="initial"
										animate="animate"
									/>
									<h3 className="ml-4 text-xl align-text-bottom my-auto">
										{title}
									</h3>
								</div>
								<p>{description}</p>
							</div>
						</motion.div>
					))}
				</div>
				{/* <button className="flex items-center mx-auto mt-10 border-b-2 border-transparent hover:border-green-300 transition-all duration-300 ease-linear">
					<span className="hover:mr-1 transition-all duration-300 ease-linear">
						Learn More
					</span>
					<svg
						className="w-4 h-4 ml-2"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="{2}"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M5 12h14" />
						<path d="M12 5l7 7-7 7" />
					</svg>
				</button> */}
			</div>
		</section>
	);
};

export default ConvinceSection;
