import React from "react";
import Card from "../Components/Card";
import { images } from "../Images/Images";
import { motion } from "framer-motion";
function Services() {
  return (
    <div className="h-full w-screen bg-black p-10 px-4">
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
          heading={"Web Development"}
          text={
            "I offer full-stack development services for web applications, providing end-to-end solutions that cover both front-end and back-end development. From crafting responsive user interfaces to building robust server-side functionality, I ensure your web app is fast, secure, and scalable. With expertise in modern frameworks like React, Node.js, and databases such as MongoDB and MySQL."
          }
        />
        <Card
          image={images.cloud}
          heading={"Cloud & DevOps Consulting"}
          text={
            "I provide comprehensive Cloud & DevOps consulting services designed to optimize your infrastructure, streamline development workflows, and accelerate product delivery. By leveraging cloud platforms like AWS, Azure, or Google Cloud, and implementing cutting-edge DevOps practices such as CI/CD pipelines."
          }
        />
        <Card
          image={images.cicd}
          heading={"CI/CD Pipelines"}
          text={
            "I specialize in building automated pipelines for seamless deployments, integrating continuous integration and continuous delivery (CI/CD) practices into your development workflow. By automating the build, test, and deployment processes.I help accelerate release cycles, reduce errors, and enhance software quality. "
          }
        />
        <Card
          image={images.kbn}
          heading={"Kubernetes Deployment"}
          text={
            "I offer scalable Kubernetes solutions for cloud-native applications, designed to optimize and automate your containerized workloads. With Kubernetes, I ensure your applications are resilient, scalable, and easy to manage across cloud environments. From setting up clusters to automating scaling, rolling updates, and managing microservices architecture."
          }
        />
      </motion.div>
    </div>
  );
}

export default Services;
