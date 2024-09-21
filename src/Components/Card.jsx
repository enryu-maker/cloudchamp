import React from "react";
import { motion } from "framer-motion";
import ShimmerButton from "@/components/magicui/shimmer-button";

function Card(props) {
  return (
    <motion.div
      className={`bg-white ${
        props.buttontext && "justify-between"
      } border-t-4 border-r-4 border-sky-500 md:h-[60vh] h-fit w-[40vh] p-4 px-6 flex flex-col items-center rounded-2xl transform transition-all duration-300 my-6`}
    >
      <img
        src={props.image}
        alt={props.heading}
        className="rounded-full w-24 h-24 object-cover border-4 border-gray-200 p-2"
      />
      <div
        className={`mt-4 space-y-2 text-center ${props.buttontext && "h-full"}`}
      >
        <p className="text-2xl font-bold text-gray-800">{props.heading}</p>
        <p className="text-justify font-normal text-gray-600">{props.text}</p>
      </div>

      {props.buttontext && (
        <ShimmerButton className="w-full py-3 hover:scale-105 mt-4">
          {props.buttontext} at {props.price ? "₹" + props.price : "Free"}
        </ShimmerButton>
      )}
    </motion.div>
  );
}

export default Card;
