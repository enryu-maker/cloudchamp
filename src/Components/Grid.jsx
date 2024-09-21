import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useInView } from "../UI/UseInView";
import { images } from "../Images/Images";
export const Grid = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width as per your mobile breakpoint
    };

    handleResize(); // Check on component mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="about" className="min-h-screen bg-white px-4 py-12 text-bluetheme">
      <motion.div
        ref={sectionRef}
        initial="initial"
        animate={isInView ? "animate" : isMobile ? "animate" : ""}
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-6xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge("col-span-4 rounded-lg bg-white p-6", className)}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6 py-6 shadow-lg">
    <img src={""} alt="avatar" className="mb-4 size-14 rounded-full shadow" />
    <h1 className="mb-12 text-4xl font-medium leading-tight text-bluetheme">
      Hi, I'm Nazi.&nbsp;
      <span className="text-zinc-400">Cloud and DevOps expert</span>
    </h1>
    <a href="" className="flex items-center gap-1 text-red-300 hover:underline">
      {/* Contact me <FiArrowRight /> */}
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3 shadow-lg p-0"
    >
      <a
        href=""
        className="grid h-full place-content-center text-3xl text-white"
      >
        {/* <SiYoutube /> */}
        <img src={images.aws} className="w-20 h-20" />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-200 md:col-span-3 shadow-lg p-0"
    >
      <a
        href=""
        className="grid h-full place-content-center text-3xl text-white"
      >
        {/* <SiYoutube /> */}
        <img src={images.kba} className="w-20 h-20" />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-indigo-700 md:col-span-3 shadow-lg p-0"
    >
      <a
        href=""
        className="grid h-full place-content-center text-3xl text-white"
      >
        {/* <SiYoutube /> */}
        <img src={images.tera} className="w-20 h-20" />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-sky-500 md:col-span-3 shadow-lg p-0"
    >
      <a
        href=""
        className="grid h-full place-content-center text-3xl text-white"
      >
        {/* <SiYoutube /> */}
        <img src={images.dca} className="w-40 h-20" />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-xl md:text-3xl leading-snug shadow-lg">
    <p>
      I’m a certified Cloud and DevOps expert&nbsp;
      <span className="text-zinc-400 ">
        with over 7 years of experience providing tailored solutions for clients
        worldwide. As an internet personality with a LinkedIn audience of over
        42K followers and 120K YouTube subscribers, I help businesses scale
        their infrastructure and adopt cloud-native technologies. I’ve worked
        with industry-leading companies like AWS, Docker, and HashiCorp.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 flex flex-col items-center gap-4 md:col-span-2 justify-center shadow-lg bg-red-500"
    >
      <SiYoutube className="text-5xl" />
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 flex flex-col items-center gap-4 md:col-span-2 justify-center shadow-lg bg-blue-600"
    >
      <FaLinkedin className="text-5xl" />
    </Block>
  </>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-8 shadow-lg">
    <p className="text-2xl text-bluetheme">
      Talks & Contributions&nbsp;
      <p className="text-zinc-400 text-xl">
        Speaker at major conferences and webinars, including AWS re:Invent,
        DockerCon, and HashiConf. Featured in industry podcasts and online
        webinars as a subject matter expert in DevOps and cloud technologies.
      </p>
    </p>
  </Block>
  //   <Block className="col-span-12 text-3xl leading-snug shadow-lg">
  //     <p>
  //       I’m a certified Cloud and DevOps expert&nbsp;
  //       <span className="text-zinc-400">
  //         with over 7 years of experience providing tailored solutions for clients
  //         worldwide. As an internet personality with a LinkedIn audience of over
  //         42K followers and 120K YouTube subscribers, I help businesses scale
  //         their infrastructure and adopt cloud-native technologies. I’ve worked
  //         with industry-leading companies like AWS, Docker, and HashiCorp.
  //       </span>
  //     </p>
  //   </Block>
);

const Logo = () => {
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};
