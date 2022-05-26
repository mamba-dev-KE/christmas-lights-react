import { useContext, useState } from "react";
import { BulbContext } from "../../context/bulbContext";
import { addBlueLights, addGreenLights, addRedLights } from "../../store/store";
import "./LightsConfig.scss";

const LightsConfig = () => {
  const [red, setRed] = useState("");
  const [blue, setBlue] = useState("");
  const [green, setGreen] = useState("");
  const { dispatch } = useContext(BulbContext);

  // red
  const handleRedChange = (e) => {
    setRed(e.target.value);
  };

  const handleRedClick = () => {
    dispatch(addRedLights(parseInt(red)));
  };

  // blue
  const handleBlueChange = (e) => {
    setBlue(e.target.value);
  };

  const handleBlueClick = () => {
    dispatch(addBlueLights(parseInt(blue)));
  };

  // green
  const handleGreenChange = (e) => {
    setGreen(e.target.value);
  };

  const handleGreenClick = () => {
    dispatch(addGreenLights(parseInt(blue)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRed("");
  };

  return (
    <form className="form flex" onSubmit={handleSubmit}>
      <label htmlFor="red">
        <input
          type="text"
          name="red"
          id="red"
          value={red}
          onChange={handleRedChange}
        />
        <button type="button" onClick={handleRedClick}>
          Add Red
        </button>
      </label>
      <label htmlFor="blue">
        <input
          type="text"
          name="blue"
          id="blue"
          value={blue}
          onChange={handleBlueChange}
        />
        <button type="button" onClick={handleBlueClick}>
          Add Blue
        </button>
      </label>
      <label htmlFor="green">
        <input
          type="text"
          name="green"
          id="green"
          value={green}
          onChange={handleGreenChange}
        />
        <button type="button" onClick={handleGreenClick}>
          Add Green
        </button>
      </label>
    </form>
  );
};

export default LightsConfig;
