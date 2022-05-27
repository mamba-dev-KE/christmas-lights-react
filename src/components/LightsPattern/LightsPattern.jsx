import { useDispatch } from "react-redux";
import { toggleLightsPattern } from "../../app/bulbSlice";
import "./LightsPattern.scss";

const LightsPattern = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => dispatch(toggleLightsPattern("mirror"))}
        className="pattern__btn pointer"
      >
        Toggle Pattern
      </button>
    </>
  );
};

export default LightsPattern;
