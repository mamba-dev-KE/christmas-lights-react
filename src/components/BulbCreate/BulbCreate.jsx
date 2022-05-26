import { useContext, useState } from "react";
import { BulbContext } from "../../context/bulbContext";
import { addBulb } from "../../store/store";
import "./BulbCreate.scss";

const BulgCreate = () => {
  const [color, setColor] = useState("");
  const { dispatch } = useContext(BulbContext);

  const handleColorSelect = (e) => {
    setColor(e.target.value);
  };

  const handleClick = () => {
    dispatch(addBulb(parseInt(blue)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <article>
      <h1>Create Christmas Light Bulbs</h1>
      <form className="form" onSubmit={handleSubmit}>
        <select
          name="color"
          id="color"
          value={color}
          onChange={(e) => handleColorSelect(e)}
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        {/* <label htmlFor="red">
          <input
            type="text"
            name="bulbs"
            id="bulbs"
            value={bulb}
            onChange={handleChange}
          />
          <button onClick={handleClick}>Add Bulb</button>
        </label> */}
      </form>
    </article>
  );
};

export default BulgCreate;
