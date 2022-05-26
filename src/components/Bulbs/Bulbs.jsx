import { useContext } from "react";
import { BulbContext } from "../../context/BulbsContext";
import Bulb from "../Bulb/Bulb";
import { AnimatePresence, motion } from "framer-motion";
import "./Bulbs.scss";

const Bulbs = () => {
  const {
    state: { bulbs },
  } = useContext(BulbContext);

  console.log(bulbs);

  return (
    <motion.section className="bulbs flex" layout>
      {bulbs?.map((bulb) => (
        <Bulb key={bulb.id} {...bulb} />
      ))}
    </motion.section>
  );
};

export default Bulbs;
