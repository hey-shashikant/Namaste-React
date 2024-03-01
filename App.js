import React from "react";
import ReactDOM from "react-dom/client";

const Element = () => {
    return (<div>
        <h1>
            <h2>
                <h3>
                    Hello from React Functional Component!
                </h3>
            </h2>
        </h1>
    </div>)
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Element/>);