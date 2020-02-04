import React from "react";

// Core
import { buildData } from "./core/helpers";

// Components
import Page from "../Page";

// ------------------------------------------------------

// Component's Function
function App(rawData = {}) {
  const data = buildData(rawData);
  return (
    <div id="app">
      <Page data={data} />
    </div>
  );
}

export default App;
