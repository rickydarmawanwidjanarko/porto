import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
import React from "react";

const YPIM = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        IT
        <span className="text-textOrange tracking-wide">@YPIM</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Nov 2019 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textOrange mt-1">
            <TiArrowForward />
          </span>
          Ensuring computers and laptops run smoothly.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textOrange mt-1">
            <TiArrowForward />
          </span>
          Adding website features as per supervisor's instructions
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textOrange mt-1">
            <TiArrowForward />
          </span>
          Repairing laptop and computer hardware and software
        </li>
      </ul>
    </motion.div>
  );
};

export default YPIM;
