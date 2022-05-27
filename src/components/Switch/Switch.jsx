import { useSelector, useDispatch } from "react-redux";
import { toggleLights } from "../../app/bulbSlice";
import "./Switch.scss";

const Switch = () => {
  const { isLightsOn } = useSelector((store) => store.bulbs);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(toggleLights())} className="switch">
        Lights {!isLightsOn ? "On" : "Off"}
      </button>
    </>
  );
};

export default Switch;
