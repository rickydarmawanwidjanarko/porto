import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Kupu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Videographer
        <span className="text-textOrange tracking-wide">@CV. Kupu Digital</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jul 2014 - Jan 2015
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textOrange mt-1">
            <TiArrowForward />
          </span>
          Operating video cameras.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textOrange mt-1">
            <TiArrowForward />
          </span>
          Editing videos.
        </li>
      </ul>
    </motion.div>
  );
};

export default Kupu;
