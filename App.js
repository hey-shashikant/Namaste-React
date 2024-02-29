/*
<div id="parent">
    <div id="child">
        <h1>
        </h1>
    </div>
</div>

*/

const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "child1"},
            [React.createElement(
                "h1",
                {},
                "I'm an H1 Tag"
            ),
            React.createElement(
                "h2",
                {},
                "I'm an 2 Tag"
            )
            ]
        ),
        React.createElement(
            "div",
            {id: "child2"},
            [React.createElement(
                "h1",
                {},
                "I'm an H1 Tag"
            ),
            React.createElement(
                "h2",
                {},
                "I'm an 2 Tag"
            )
            ]
        )
    ]
);

// JSX - makes our life easy when we will create elements.

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);