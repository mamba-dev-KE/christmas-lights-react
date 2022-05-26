import { useContext } from "react";
import { BulbContext } from "../../context/BulbsContext";
import { toggleLights } from "../../app/store";
import "./Switch.scss";

const Switch = () => {
  const {
    state: { isLightsOn },
    dispatch,
  } = useContext(BulbContext);

  return (
    <>
      <button onClick={() => dispatch(toggleLights())} className="switch">
        Lights {!isLightsOn ? "On" : "Off"}
      </button>
    </>
  );
};

export default Switch;
