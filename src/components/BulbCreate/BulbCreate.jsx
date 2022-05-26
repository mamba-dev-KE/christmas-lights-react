import { useContext, useState } from "react";
import { BulbContext } from "../../context/BulbsContext";
import { addBulb } from "../../app/store";
import "./BulbCreate.scss";

const BulbCreate = () => {
  const [color, setColor] = useState("");

  const { dispatch } = useContext(BulbContext);

  const handleColorSelect = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBulb = {
      id: new Date().getTime(),
      color: color,
      isOn: true,
    };

    if (color) {
      dispatch(addBulb(newBulb));
    }

    setColor("");
  };

  return (
    <article className="bulb-create">
      <h1 className="bulb-create__title text-center">
        Create Christmas Light Bulbs
      </h1>
      <form className="bulb-create__form flex" onSubmit={handleSubmit}>
        <select
          className="bulb-create__colors"
          name="color"
          id="color"
          value={color}
          onChange={handleColorSelect}
        >
          <option value="red">select color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="gold">Gold</option>
        </select>
        <button className="pointer">Create Bulb</button>
      </form>
    </article>
  );
};

export default BulbCreate;
