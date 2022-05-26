import { useContext, useState } from "react";
import { BulbContext } from "../../context/bulbContext";
import "./BulbCreate.scss";

const BulbCreate = () => {
  const [color, setColor] = useState("");
  const { dispatch } = useContext(BulbContext);

  const handleColorSelect = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <article className="bulb-create">
      <h1 className="bulb-create__title text-center">
        Create Christmas Light Bulbs
      </h1>
      <form className="form flex" onSubmit={handleSubmit}>
        <select
          className="bulb-create__colors"
          name="color"
          id="color"
          value={color}
          onChange={(e) => handleColorSelect(e)}
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </form>
    </article>
  );
};

export default BulbCreate;
