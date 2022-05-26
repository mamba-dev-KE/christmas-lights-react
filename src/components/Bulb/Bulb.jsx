import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { removeBulb, toggleLight } from "../../app/store";
import { BulbContext } from "../../context/bulbContext";
import { motion } from "framer-motion";
import "./Bulb.scss";

const Bulb = ({ id, color, isOn }) => {
  const {
    state: { isLightsOn },
    dispatch,
  } = useContext(BulbContext);

  const bulbVariants = {
    hidden: {
      opacity: 0.6,
      y: 10,
      scale: 0.5,
      boxShadow: "none",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: [0.9, 1],
      boxShadow: isLightsOn ? `1px 10px 12px 20px ${color}` : "none",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" className="bulb flex">
      <motion.div
        key={id}
        className="pointer"
        style={{ backgroundColor: color }}
        initial="hidden"
        animate="visible"
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
