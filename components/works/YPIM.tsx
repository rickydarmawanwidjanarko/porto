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
        {'IT Support Specialist'}
        <span className="text-textOrange tracking-wide">{'@Yayasan Putra Indonesia Malang'}</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        {'Nov 2019'} - {'Agst 2025'}
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textOrange mt-1">
            <TiArrowForward />
          </span>
          {'Ensuring computers and laptops run smoothly.'}
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textOrange mt-1">
            <TiArrowForward />
          </span>
          {'Adding website features as per supervisors instructions.'}
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textOrange mt-1">
            <TiArrowForward />
          </span>
          {'Repairing laptop and computer hardware and software.'}
        </li>
      </ul>
    </motion.div>
  );
};

export default YPIM;
