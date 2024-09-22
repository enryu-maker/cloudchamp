import React from "react";
import ShimmerButton from "@/components/magicui/shimmer-button";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import Particles from "@/components/magicui/particles";
import Card from "Components/Card";
import { images } from "Images/Images";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence

function Cource() {
  const [cource, setCource] = React.useState("FREE");

  const cardData = {
    FREE: [
      {
        image: images.hosting,
        heading: "Mastering DevOps",
        text: "Learn the essentials of DevOps with hands-on projects.",
        buttontext: "Enroll Now",
      },
      {
        image: images.web,
        heading: "Kubernetes for Beginners",
        text: "Learn Kubernetes from scratch.",
        buttontext: "Enroll Now",
      },
      {
        image: images.cloud,
        heading: "Cloud & DevOps Consulting",
        text: "I provide comprehensive Cloud & DevOps consulting services designed to optimize your infrastructure, streamline development workflows, and accelerate product delivery. By leveraging cloud platforms like AWS, Azure, or Google Cloud, and implementing cutting-edge DevOps practices such as CI/CD pipelines.",
      },
    ],
    PAID: [
      {
        image: images.hosting,
        heading: "Mastering DevOps",
        text: "Learn the essentials of DevOps with hands-on projects.",
        buttontext: "Enroll Now",
        price: "499",
      },
      {
        image: images.web,
        heading: "Kubernetes for Beginners",
        text: "Learn Kubernetes from scratch.",
        buttontext: "Enroll Now",
        price: "999",
      },
      {
        image: images.cloud,
        heading: "Cloud & DevOps Consulting",
        text: "I provide comprehensive Cloud & DevOps consulting services designed to optimize your infrastructure, streamline development workflows, and accelerate product delivery. By leveraging cloud platforms like AWS, Azure, or Google Cloud, and implementing cutting-edge DevOps practices such as CI/CD pipelines.",
        price: "1999",
      },
    ],
  };

  return (
    <div className="h-full w-screen bg-black p-10 px-4">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={50}
        color={"#ffffff"}
        refresh
      />
      <div className="w-full h-20 border-b flex justify-start gap-5 items-center">
        {/* Set course state to 'FREE' on button click */}
        <ShimmerButton
          background={"#ffffff"}
          shimmerColor={"#000000"}
          className="h-1/2 w-40 text-black"
          borderRadius={"15px"}
          onClick={() => setCource("FREE")}
        >
          <GradualSpacing
            text={"Free Courses"}
            className={"tracking-tighter"}
          />
        </ShimmerButton>

        {/* Set course state to 'PAID' on button click */}
        <ShimmerButton
          background={"#ffffff"}
          shimmerColor={"#000000"}
          className="h-1/2 w-40 text-black"
          borderRadius={"15px"}
          onClick={() => setCource("PAID")}
        >
          <GradualSpacing
            text={"Paid Courses"}
            className={"tracking-tighter"}
          />
        </ShimmerButton>
      </div>

      {/* Animate the cards with AnimatePresence */}
      <div className="h-fit w-full">
        <AnimatePresence wait>
          <motion.div
            key={cource}
            className="flex items-center h-full w-full gap-5 justify-evenly flex-wrap mt-10"
          >
            {cardData[cource]?.map((card, index) => (
              <motion.div
                key={index}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200, // Adjust the stiffness for a stronger spring
                  damping: 15, // Adjust damping for more or less bounciness
                  delay: index * 0.3,
                }}
              >
                <Card
                  image={card.image}
                  heading={card.heading}
                  text={card.text}
                  buttontext={card.buttontext}
                  price={card.price}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Cource;
