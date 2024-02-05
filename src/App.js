import Card from "./components/card/Card";
import { data } from "./data";
import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        {data.map((data, key) => {
          return (
            <div className={`card ${data.title}`} key={key}>
              <Card svg={data.svg} title={data.title} context={data.context} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
