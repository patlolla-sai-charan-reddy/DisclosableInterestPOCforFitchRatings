import React from "react";
import ReactDOM from "react-dom";
import NonEu from "./non-eu-disqualifying-component";
import EuDisclosable from "./eu-disclosable-components";
import EuDisqualifying from "./eu-disqualifying-component";
import NonEuDisclosable from "./non-eu-disclosable-component";

import "./styles.css";

function App() {
  return (
    <div className="App row">
      <p className="legalText col-lg-12">
        Legal text goes here : Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. In ultrices dictum urna, eu facilisis risus vehicula
        vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
        ultrices dictum urna, eu facilisis risus vehicula vel. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. In ultrices dictum urna, eu
        facilisis risus vehicula vel.
      </p>
      <div className="mainContainer col-lg-12">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12 sec-1">
                <p>Some Text : 1</p>
                <NonEu data={"COMPONENT"} />
              </div>
              <div className="col-lg-12 sec-2">
                <p>Some Text : 2</p>
                <EuDisqualifying />
              </div>
            </div>
          </div>
          <hr />
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12 sec-3">
                <p>Some Text : 3</p>
                <NonEuDisclosable />
              </div>
              <div className="col-lg-12 sec-4">
                <p>Some Text : 4</p>
                <EuDisclosable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
