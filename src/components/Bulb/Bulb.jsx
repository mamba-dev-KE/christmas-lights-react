import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { removeBulb, toggleLight } from "../../app/store";
import { BulbContext } from "../../context/BulbsContext";
import { motion } from "framer-motion";
import "./Bulb.scss";

const Bulb = ({ id, color, isOn }) => {
  const {
    state: { isLightsOn },
    dispatch,
  } = useContext(BulbContext);

  const bulbVariants = {
    hidden: {
      opacity: isLightsOn ? 0.4 : 1,
      y: 10,
      scale: 0.5,
      boxShadow: "none",
    },
    glow: {
      opacity: 1,
      y: 0,
      scale: [0.9, 1],
      boxShadow: isOn ? `1px 10px 12px 20px ${color}` : `0 0 0 0 transparent`,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" className="bulb flex">
      <motion.div
        key={id}
        className="pointer"
        style={{ backgroundColor: color }}
        initial="hidden"
        animate={isLightsOn ? "glow" : "visible"}
        variants={bulbVariants}
        layout
      ></motion.div>
      <motion.button className="bulb__remove pointer">
        <FaTimes onClick={() => dispatch(removeBulb(id))} />
      </motion.button>
      <motion.button className="bulb__light-off pointer">
        <FaTimes onClick={() => dispatch(toggleLight(id))} />
      </motion.button>
    </motion.div>
  );
};

export default Bulb;
