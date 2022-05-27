import { motion } from "framer-motion";
import { BulbControls } from "../../components";
import { useSelector } from "react-redux";
import "./Bulb.scss";

const Bulb = ({ id, color, isOn, isBroken }) => {
  const { isLightsOn, isLightsPattern } = useSelector((store) => store.bulbs);
  const bulbVariants = {
    hidden: {
      opacity: isOn && !isBroken ? 0.5 : 1,
      y: 30,
      scale: isOn ? 0.8 : 1,
      boxShadow: isOn ? `1px 5px 6px 10px ${color}` : `0 0 0 0 transparent`,
    },
    glow: {
      opacity: 1,
      y: 0,
      scale: isLightsPattern ? [1, 2, 1] : 1,
      boxShadow: `1px 10px 12px 20px ${color}`,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 10,
      scale: 1,
    },
  };

  const bulbBrokenVariants = {
    hidden: {
      opacity: 1,
      scale: 1,
    },
    visible: {
      opacity: 0.9,
      scale: 0.5,
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" className="bulb flex">
      <motion.div
        key={id}
        className="pointer"
        style={{ backgroundColor: color }}
        initial="hidden"
        animate={isLightsOn && isOn !== false ? "glow" : "visible"}
        variants={isBroken ? bulbBrokenVariants : bulbVariants}
        layout
      ></motion.div>
      <BulbControls id={id} />
    </motion.div>
  );
};

export default Bulb;
