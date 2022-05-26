import { useContext } from "react";
import { BulbContext } from "../../context/bulbContext";
import Bulb from "../Bulb/Bulb";
import "./Bulbs.scss";

const Bulbs = () => {
  const {
    state: { bulbs },
  } = useContext(BulbContext);
  
  return (
    <section className="bulbs flex">
      {bulbs?.map((bulb) => (
        <Bulb key={bulb.id} {...bulb} />
      ))}
    </section>
  );
};

export default Bulbs;
