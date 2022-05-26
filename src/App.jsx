import { Bulbs, Switch, BulbCreate } from "./components";

const App = () => {
  return (
    <div className="container">
      <section className="config">
        <BulbCreate />
      </section>
      <section className="bulbs">
        <Bulbs />
      </section>
      <section className="controls">
        <Switch />
      </section>
    </div>
  );
};

export default App;
