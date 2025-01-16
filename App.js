import React from "react";
import ReactDOM from "react-dom/client";

const Tittle = () => (
  <h1 id="heading" tabIndex="1">
    Namaste React &#128640;
  </h1>
);

const HeadingComponent = () =>(
    <div id="container">
        <Tittle/>
        <h1>Rect Functional Component!!</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
