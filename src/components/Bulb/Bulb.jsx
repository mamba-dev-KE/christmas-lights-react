import { useContext } from "react";
import { BulbContext } from "../../context/BulbsContext";
import { motion } from "framer-motion";
import { BulbControls } from "../../components";
import "./Bulb.scss";

const Bulb = ({ id, color, isOn }) => {
  const {
    state: { isLightsOn },
  } = useContext(BulbContext);

  const bulbVariants = {
    hidden: {
      opacity: isLightsOn ? 0.4 : 1,
      y: 10,
      scale: isLightsOn ? 0.5 : 1,
      boxShadow: "none",
    },
    glow: {
      opacity: 1,
      y: 0,
      scale: isLightsOn ? [0.9, 1] : 1,
      boxShadow: isOn ? `1px 10px 12px 20px ${color}` : `0 0 0 0 ${color}`,
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
      <BulbControls id={id} />
    </motion.div>
  );
};

export default Bulb;
