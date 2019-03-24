import React from "react";
import ReactDOM from "react-dom";

const App = function() {
  return (
    <div>
      <label for="name" class="label">
        Enter Name
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
