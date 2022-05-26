import { useContext, useState } from "react";
import { BulbContext } from "../../context/bulbContext";
import { addBlueLights, addGreenLights, addRedLights } from "../../store/store";
import "./BulbCreate.scss";

const BulgCreate = () => {
  const [bulbNumber, setBulbNumber] = useState("");
  const [bulbColor, setBulbColor] = useState("");

  const { dispatch } = useContext(BulbContext);
  // green
  const handleChange = (e) => {
    setBulbNumber(e.target.value);
  };

  const handleClick = () => {
    dispatch(addGreenLights(parseInt(blue)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRed("");
  };

  return (
    <>
      <h1>Create Christmas Light Bulbs</h1>
      <form className="form flex" onSubmit={handleSubmit}>
        <label htmlFor="red">
          <input
            type="text"
            name="bulbs"
            id="bulbs"
            value={bulbNumber}
            onChange={handleChange}
          />
          <button onClick={handleClick}>Add Bulb</button>
        </label>
      </form>
    </>
  );
};

export default BulgCreate;
