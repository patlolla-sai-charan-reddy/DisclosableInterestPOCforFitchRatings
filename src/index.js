import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <p className="legaltext">
        Legal text goes here : Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. In ultrices dictum urna, eu facilisis risus vehicula
        vel. In pharetra quam eu diam posuere gravida at eu ex. Sed lectus
        nulla, rhoncus sed velit ullamcorper, pretium dignissim libero. Proin id
        auctor arcu. Vivamus magna tellus, congue non sem in, sagittis volutpat
        nibh. In lacinia mauris eu orci consequat efficitur. Vivamus ac
        venenatis sapien, a egestas purus. Aliquam diam libero, maximus a ex
        vel, ullamcorper vehicula mi. Sed quis pulvinar ligula. Proin venenatis
        ante in condimentum commodo. Etiam vitae purus arcu. Nam vel nisi ante.
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
