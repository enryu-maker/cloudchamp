import React from "react";
import { motion } from "framer-motion";

function Card(props) {
  return (
    <motion.div className="bg-white border-t-4 border-r-4 border-blue-300 h-[60vh] w-[40vh] p-4 px-6 flex flex-col items-center rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 my-6">
      <img
        src={props.image}
        alt={props.heading}
        className="rounded-full w-24 h-24 object-cover border-4 border-gray-200 p-2"
      />
      <div className="mt-4 space-y-2 text-center">
        <p className="text-2xl font-bold text-gray-800">{props.heading}</p>
        <p className="text-justify font-normal text-gray-600">{props.text}</p>
      </div>
    </motion.div>
  );
}

export default Card;
