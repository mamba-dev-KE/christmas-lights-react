import Bulb from "../Bulb/Bulb";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import "./Bulbs.scss";

const Bulbs = () => {
  const { bulbs } = useSelector((store) => store.bulbs);

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
