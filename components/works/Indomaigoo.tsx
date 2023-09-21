import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Indomaigoo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Warehouse
        <span className="text-textOrange tracking-wide">@PT. Indo Mai Goo</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Mar 2016 - Mar 2018
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textOrange mt-1">
            <TiArrowForward />
          </span>
          Preparing ordered items for the courier.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textOrange mt-1">
            <TiArrowForward />
          </span>
          Conducting monthly stock opname.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textOrange mt-1">
            <TiArrowForward />
          </span>
          Performing loading and unloading of ice every 3 weeks.
        </li>
      </ul>
    </motion.div>
  );
};

export default Indomaigoo;
