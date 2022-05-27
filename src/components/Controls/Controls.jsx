import { Switch, LightsPattern } from "../../components";
import "./Controls.scss";

const Controls = () => {
  return (
    <section className="controls flex">
      <Switch />
      <LightsPattern />
    </section>
  );
};

export default Controls;
