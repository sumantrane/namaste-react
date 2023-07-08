const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am a h1 tag from react"),
    React.createElement("h2", {}, "I am a h3 tag from react"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a h1 tag from react"),
    React.createElement("h2", {}, "I am a h3 tag from react"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
