import { FaTimes, FaFreeCodeCamp, FaHeartBroken } from "react-icons/fa";
import { TiArrowRepeat } from "react-icons/ti";
import { useDispatch } from "react-redux";
import {
  removeBulb,
  toggleLightStatus,
  toggleBrokenStatus,
} from "../../app/bulbSlice";
import "./BulbControls.scss";

const BulbControls = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <div className="bulb-controls flex">
      <button className="bulb__remove pointer">
        <FaTimes onClick={() => dispatch(removeBulb(id))} />
      </button>
      <button className="bulb__light-off pointer">
        <FaFreeCodeCamp onClick={() => dispatch(toggleLightStatus(id))} />
      </button>
      <button className="bulb__light-broken pointer">
        <FaHeartBroken onClick={() => dispatch(toggleBrokenStatus(id))} />
      </button>
      <button className="bulb__light-change pointer">
        <TiArrowRepeat onClick={() => dispatch(toggleBrokenStatus(id))} />
      </button>
    </div>
  );
};

export default BulbControls;
