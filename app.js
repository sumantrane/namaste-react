import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome to React. 🚀"
);

//jsx - its not html in javascript its html/XML like syntax.
//jsx=>Babel transpiles it to (React.createElement) => ReactElement (js Object) => HTMLElement(render)

const number = 10000;

//React Component
const HeadingComponent = () =>
(
  <>
    <div className="container">
      <Title />
      <Title></Title>
      {Title()}
      {jsxHeading}
      <h2>{Math.floor(number / 3)}</h2>
      <h1>This is functional component heading...🚀</h1>
    </div>
    <div className="container-2">
      <h3>This is container 2</h3>
    </div>
  </>
)

const NavbarComponent = () => (
  <div className="container">
    <a href="#">Home</a>
    <a href="#">About us</a>
    <a href="#">Contact us</a>
  </div>
)

const Title = () =>
(
  <div>
    <h3 className="title">This is title component</h3>
  </div>
)

//React element
const jsxHeading = (
  <h1 id="jsxHeading" className="header" tabIndex='1'>
    This is jsx heading 🚀
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

//root.render(heading);
//root.render(jsxHeading);
root.render(<HeadingComponent />)

root2.render(<NavbarComponent />)