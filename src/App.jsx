import BulbGroup from "./components/BulbGroup/BulbGroup";
import LightsConfig from "./components/LightsConfig/LightsConfig";
import Switch from "./components/Switch/Switch";

const App = () => {
  return (
    <div className="container">
      <section className="config">
        <LightsConfig />
      </section>
      <section className="bulbs">
        <BulbGroup />
      </section>
      <section className="controls">
        <Switch />
      </section>
    </div>
  );
};

export default App;
