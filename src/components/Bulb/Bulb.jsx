import { motion } from "framer-motion";
import { BulbControls } from "../../components";
import { useSelector } from "react-redux";
import "./Bulb.scss";

const Bulb = ({ id, color, isOn, isBroken }) => {
  const { isLightsOn, isLightsPattern } = useSelector((store) => store.bulbs);
  const bulbVariants = {
    hidden: {
      opacity: isOn ? 0.9 : 0.5,
      y: 30,
      scale: isOn && isLightsOn && !isBroken ? 0.8 : 1,
      boxShadow:
        isOn && isLightsOn ? `1px 5px 6px 10px ${color}` : `0 0 2px 0 ${color}`,
    },
    glow: {
      opacity: 1,
      y: 0,
      scale: isLightsPattern ? [2, 2.5] : 0.7,
      boxShadow: `1px 10px 12px 20px ${color}`,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
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
      scale: 0.9,
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" className="bulb flex">
      <motion.div
        key={id}
        className="pointer"
        style={{ backgroundColor: color }}
        initial="hidden"
        animate={isLightsOn && !isBroken && isOn ? "glow" : "visible"}
        variants={isBroken ? bulbBrokenVariants : bulbVariants}
        layout
      ></motion.div>
      <BulbControls id={id} />
    </motion.div>
    // <motion.div initial="hidden" animate="visible" className="bulb flex">
    //   <motion.div
    //     key={id}
    //     className="pointer"
    //     style={{ backgroundColor: color }}
    //     initial="hidden"
    //     animate={isLightsOn && !isBroken && isOn ? "glow" : "visible"}
    //     variants={isBroken ? bulbBrokenVariants : bulbVariants}
    //     layout
    //   ></motion.div>
    //   <BulbControls id={id} />
    // </motion.div>
  );
};

export default Bulb;
