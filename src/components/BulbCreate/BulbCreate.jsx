import { useState } from "react";
import { addBulb } from "../../app/bulbSlice";
import { useDispatch } from "react-redux";
import "./BulbCreate.scss";

const BulbCreate = () => {
  const [color, setColor] = useState("");

  const dispatch = useDispatch();

  const handleColorSelect = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBulb = {
      id: new Date().getTime(),
      color: color,
      isOn: true,
      isBroken: false,
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
