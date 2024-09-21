import React from "react";
import { motion } from "framer-motion";
import { images } from "../Images/Images";
import Card from "../Components/Card";
import WordFadeIn from "@/components/magicui/word-fade-in";
function Cource() {
  return (
    <div className="h-full w-screen bg-black p-10 px-4">
      <>
        <WordFadeIn
          words={"Paid Cources"}
          className={
            "text-sky-500 text-start tracking-wider italic pb-10 md:text-5xl text-4xl font-semibold"
          }
        />
        <hr></hr>
        <motion.div className="flex items-center h-full w-full gap-5 justify-evenly flex-wrap p-4">
          <Card
            image={images.hosting}
            heading={"Mastering DevOps"}
            text={"Learn the essentials of DevOps with hands-on projects."}
            price={"299"}
            buttontext={"Enroll Now"}
          />
          <Card
            image={images.web}
            heading={"Kubernetes for Beginners"}
            text={"Learn Kubernetes from scratch."}
            buttontext={"Enroll Now"}
            price={"199"}
          />
          <Card
            image={images.cloud}
            heading={"Cloud & DevOps Consulting"}
            text={
              "I provide comprehensive Cloud & DevOps consulting services designed to optimize your infrastructure, streamline development workflows, and accelerate product delivery. By leveraging cloud platforms like AWS, Azure, or Google Cloud, and implementing cutting-edge DevOps practices such as CI/CD pipelines."
            }
          />
        </motion.div>
      </>
      <>
        <WordFadeIn
          words={"Free Cources"}
          className={
            "text-sky-500 text-start tracking-wider italic pb-10 md:text-5xl text-4xl font-semibold"
          }
        />
        <hr></hr>
        <motion.div className="flex items-center h-full w-full gap-5 justify-evenly flex-wrap p-4">
          <Card
            image={images.hosting}
            heading={"Mastering DevOps"}
            text={"Learn the essentials of DevOps with hands-on projects."}
            buttontext={"Enroll Now"}
          />
          <Card
            image={images.web}
            heading={"Kubernetes for Beginners"}
            text={"Learn Kubernetes from scratch."}
            buttontext={"Enroll Now"}
          />
          <Card
            image={images.cloud}
            heading={"Cloud & DevOps Consulting"}
            text={
              "I provide comprehensive Cloud & DevOps consulting services designed to optimize your infrastructure, streamline development workflows, and accelerate product delivery. By leveraging cloud platforms like AWS, Azure, or Google Cloud, and implementing cutting-edge DevOps practices such as CI/CD pipelines."
            }
          />
        </motion.div>
      </>
    </div>
  );
}

export default Cource;
