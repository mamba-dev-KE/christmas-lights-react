import { useContext } from "react";
import { BulbContext } from "../../context/BulbsContext";
import Bulb from "../Bulb/Bulb";
import { motion } from "framer-motion";
import "./Bulbs.scss";

const Bulbs = () => {
  const {
    state: { bulbs },
  } = useContext(BulbContext);

  if (!bulbs.length) {
    return (
      <div className="bulbs__info">
        <h3 className="text-center">No bulbs have been created...</h3>
      </div>
    );
  }

  return (
    <motion.section className="bulbs flex" layout>
      {bulbs?.map((bulb) => (
        <Bulb key={bulb.id} {...bulb} />
      ))}
    </motion.section>
  );
};

export default Bulbs;
