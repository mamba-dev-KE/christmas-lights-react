import { useContext } from "react";
import { BulbContext } from "../../context/bulbContext";
import "./Bulbs.scss";

const Bulbs = () => {
  const {
    state: { bulbs },
  } = useContext(BulbContext);
  console.log(bulbs);
  return <div className=""></div>;
};

export default Bulbs;
