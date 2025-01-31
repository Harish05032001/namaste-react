
const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child1"},
            [React.createElement("h1",{},"Im the h1 tag !!!!"),React.createElement("h2",{},"Im the h2 tag !!!!")]
        ),
        React.createElement(
            "div",
            {id:"child2"},
            [React.createElement("h3",{},"Im the h3 tag !!!!"),React.createElement("h4",{},"Im the h4 tag !!!!")]
        )
    ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);