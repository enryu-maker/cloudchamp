import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
import { useInView } from "../UI/UseInView";
import { Link } from "react-router-dom";
const Hero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
  return (
    <div className="min-h-screen w-screen bg-slate-800 px-4 py-20 text-bluetheme flex flex-col justify-between">
      <h1 className="text-blue-500 text-center text-5xl pb-10 md:text-8xl font-semibold italic">
        The CloudChamp
      </h1>
      <motion.div
        // ref={sectionRef}
        initial="initial"
        animate={"animate"}
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-8xl grid-cols-12 gap-2 h-full md:h-[50vh] w-full"
      >
        <HeaderBlock />
        <SocialsBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          // scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          // scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 600,
        damping: 45,
      }}
      className={twMerge("rounded-3xl bg-blue-50 p-6", className)}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 md:col-span-6 row-span-12 py-6 shadow-lg">
    {/* <img src={""} alt="avatar" className="mb-4 size-14 rounded-full shadow" /> */}
    <h1 className="mb-12 text-4xl font-medium leading-tight text-bluetheme space-y-2">
      <p>Cloud, DevOps, & Development Solutions for Your Business&nbsp;</p>
      <p className="text-zinc-400 text-xl w-2/3">
        Expert Freelance Services in Hosting, Cloud, CI/CD, Kubernetes, and More
      </p>
      <button className="text-xl flex items-center gap-2">
        Contact me <FiArrowRight />
      </button>
    </h1>
  </Block>
);

const SocialsBlock = () => (
  <>
    {/* Top two rows with 4 small boxes */}
    <Block className="col-span-6 md:col-span-3 bg-blue-500 shadow-lg p-4">
      <a
        href=""
        className="grid h-full place-content-center text-lg md:text-3xl  text-white "
      >
        <p className="italic font-medium">About Us</p>
      </a>
    </Block>
    <Block className="col-span-6 md:col-span-3 bg-blue-200 shadow-lg p-4">
      <a
        href=""
        className="grid h-full place-content-center text-lg md:text-3xl  text-white"
      >
        <p className="italic font-medium">Course</p>
      </a>
    </Block>
    <Block className="col-span-6 md:col-span-3 bg-indigo-700 shadow-lg p-4">
      <a
        href="services"
        className="grid h-full place-content-center text-lg md:text-3xl  text-white"
      >
        <p className="italic font-medium">Services</p>
      </a>
    </Block>
    <Block className="col-span-6 md:col-span-3 bg-sky-500 shadow-lg p-4">
      <a
        href=""
        className="grid h-full place-content-center text-lg md:text-3xl  text-white"
      >
        <p className="italic font-medium">Contact Us</p>
      </a>
    </Block>

    {/* Bottom row with 2 big boxes */}
    <Block className="col-span-12 md:col-span-6 row-span-10 bg-sky-500 shadow-lg p-0">
      <a
        href=""
        className="grid h-full place-content-center text-lg md:text-3xl  text-white"
      >
        <p className="italic font-medium">Contact Us</p>
      </a>
    </Block>
  </>
);

export default Hero;
