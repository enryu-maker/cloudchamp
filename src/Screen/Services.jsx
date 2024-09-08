import React from "react";
import Card from "../Components/Card";
import { images } from "../Images/Images";
import { motion } from "framer-motion";
function Services() {
  return (
    <div className="h-full w-screen bg-slate-800 p-10 px-4">
      <motion.div className="flex items-center h-full w-full gap-5 justify-evenly flex-wrap p-4">
        <Card
          image={images.hosting}
          heading={"Hosting Solutions"}
          text={
            "I provide reliable cloud hosting services for websites and applications, leveraging leading platforms like AWS to ensure scalability, security, and high performance. With features such as auto-scaling, managed databases, and global content delivery networks, I ensure that your digital infrastructure can handle fluctuating traffic while maintaining optimal uptime."
          }
        />
        <Card
          image={images.web}
          heading={"Hosting Solutions"}
          text={
            "I provide reliable cloud hosting services for websites and applications, leveraging leading platforms like AWS to ensure scalability, security, and high performance. With features such as auto-scaling, managed databases, and global content delivery networks, I ensure that your digital infrastructure can handle fluctuating traffic while maintaining optimal uptime."
          }
        />
        <Card
          image={images.cloud}
          heading={"Hosting Solutions"}
          text={
            "I provide reliable cloud hosting services for websites and applications, leveraging leading platforms like AWS to ensure scalability, security, and high performance. With features such as auto-scaling, managed databases, and global content delivery networks, I ensure that your digital infrastructure can handle fluctuating traffic while maintaining optimal uptime."
          }
        />
        <Card
          image={images.cicd}
          heading={"Hosting Solutions"}
          text={
            "I provide reliable cloud hosting services for websites and applications, leveraging leading platforms like AWS to ensure scalability, security, and high performance. With features such as auto-scaling, managed databases, and global content delivery networks, I ensure that your digital infrastructure can handle fluctuating traffic while maintaining optimal uptime."
          }
        />
        <Card
          image={images.kbn}
          heading={"Hosting Solutions"}
          text={
            "I provide reliable cloud hosting services for websites and applications, leveraging leading platforms like AWS to ensure scalability, security, and high performance. With features such as auto-scaling, managed databases, and global content delivery networks, I ensure that your digital infrastructure can handle fluctuating traffic while maintaining optimal uptime."
          }
        />
      </motion.div>
    </div>
  );
}

export default Services;
