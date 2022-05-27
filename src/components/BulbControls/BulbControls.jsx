import { removeBulb, toggleLight } from "../../app/store";
import { FaTimes, FaFreeCodeCamp, FaHeartBroken } from "react-icons/fa";
import { TiArrowRepeat } from "react-icons/ti";
import { useContext } from "react";
import { BulbContext } from "../../context/BulbsContext";
import "./BulbControls.scss";

const BulbControls = ({ id }) => {
  const { dispatch } = useContext(BulbContext);

  return (
    <div className="bulb-controls flex">
      <button className="bulb__remove pointer">
        <FaTimes onClick={() => dispatch(removeBulb(id))} />
      </button>
      <button className="bulb__light-off pointer">
        <FaFreeCodeCamp onClick={() => dispatch(toggleLight(id))} />
      </button>
      <button className="bulb__light-change pointer">
        <TiArrowRepeat onClick={() => dispatch(toggleLight(id))} />
      </button>
      <button className="bulb__light-broken pointer">
        <FaHeartBroken onClick={() => dispatch(toggleLight(id))} />
      </button>
    </div>
  );
};

export default BulbControls;
