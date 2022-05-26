import BulbGroup from "./components/BulbGroup/BulbGroup";
import Switch from "./components/Switch/Switch";

const App = () => {
  return (
    <div className="container">
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
