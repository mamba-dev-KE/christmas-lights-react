import { motion } from "framer-motion";
import { BulbControls } from "../../components";
import { useSelector } from "react-redux";
import "./Bulb.scss";

const Bulb = ({ id, color, isOn, isBroken }) => {
  const { isLightsOn } = useSelector((store) => store.bulbs);

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
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const bulbBrokenVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 0.9,
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" className="bulb flex">
      <motion.div
        key={id}
        className="pointer"
        style={{ backgroundColor: color }}
        initial="hidden"
        animate={isLightsOn && isBroken === false ? "glow" : "visible"}
        variants={isBroken ? bulbBrokenVariants : bulbVariants}
        layout
      ></motion.div>
      <BulbControls id={id} />
    </motion.div>
  );
};

export default Bulb;
