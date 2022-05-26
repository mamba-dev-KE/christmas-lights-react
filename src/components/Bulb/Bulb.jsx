import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { removeBulb } from "../../app/store";
import { BulbContext } from "../../context/bulbContext";
import "./Bulb.scss";

const Bulb = ({ id, color }) => {
  const { dispatch } = useContext(BulbContext);

  return (
    <div className="bulb flex">
      <div key={id} style={{ backgroundColor: color }}></div>
      <button className="bulb__remove pointer">
        <FaTimes onClick={() => dispatch(removeBulb(id))} />
      </button>
    </div>
  );
};

export default Bulb;
