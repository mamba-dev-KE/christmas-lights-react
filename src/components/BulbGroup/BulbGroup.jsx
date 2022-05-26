import Bulb from "../Bulb/Bulb";
import "./BulbGroup.scss";

const BulbGroup = () => {
  return (
    <div className="bulb-group flex">
      <Bulb />
      <Bulb />
      <Bulb />
    </div>
  );
};

export default BulbGroup;
