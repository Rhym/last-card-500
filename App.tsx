import React from "react";
import { Provider } from "./src/store/store";
import Screens from "./src/screens/Screens/Screens";

const App = () => {
  return (
    <Provider>
      <Screens />
    </Provider>
  );
};

export default App;
