import Bulb from "./components/Bulb/Bulb";
import BulgCreate from "./components/BulbCreate/BulbCreate";
import Switch from "./components/Switch/Switch";

const App = () => {
  return (
    <div className="container">
      <section className="config">
        <BulgCreate />
      </section>
      <section className="bulbs">
        <Bulb />
      </section>
      <section className="controls">
        <Switch />
      </section>
    </div>
  );
};

export default App;
