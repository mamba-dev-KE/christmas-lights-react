import { useContext, useEffect } from "react";
import { Bulbs, Switch, BulbCreate } from "./components";
import { BulbContext } from "./context/BulbsContext";

const App = () => {
  const {
    state: { bulbs },
  } = useContext(BulbContext);

  // useEffect(() => {
  //   localStorage.setItem("bulbs", JSON.stringify(bulbs));
  //   return () => {
  //     localStorage.removeItem("bulbs");
  //   };
  // });

  return (
    <div className="container">
      <BulbCreate />
      <Bulbs />
      <Switch />
    </div>
  );
};

export default App;
