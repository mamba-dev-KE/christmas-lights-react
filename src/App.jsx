import { useContext, useEffect } from "react";
import { BulbCreate, BulbControls, Bulbs } from "./components";
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
      <BulbControls />
      <Bulbs />
    </div>
  );
};

export default App;
