import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App row">
      <p className="legalText col-lg-12">
        Legal text goes here : Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. In ultrices dictum urna, eu facilisis risus vehicula
        vel.
      </p>
      <div className="mainContainer col-lg-12">
        <div className="row">
          <div className="col-lg-12">
            <div className="col-lg-6">hello</div>
            <div className="col-lg-6">hello</div>
          </div>

          <div className="col-lg-12">
            <div className="col-lg-6">hello</div>
            <div className="col-lg-6">hello</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
