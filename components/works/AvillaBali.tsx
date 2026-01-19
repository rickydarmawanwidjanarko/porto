import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
import React from "react";

const AvillaBali = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        {'IT Support Specialist'}
        <span className="text-textOrange tracking-wide">{'@AvillaBali'}</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        {'Dec 2025'} - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textOrange mt-1">
            <TiArrowForward />
          </span>
          {'Ensure that all company apllications are running properly.'}
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textOrange mt-1">
            <TiArrowForward />
          </span>
          {'Developt and add new features of the companys applications or websites.'}
        </li>
      </ul>
    </motion.div>
  );
};

export default AvillaBali;
