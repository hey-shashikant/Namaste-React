import React from "react";
import ReactDOM from "react-dom/client";

/*
* Header
    - Logo
    - Nav Items
    - 
* Body
    - Search
    - Resturant Container
    - Resturant Card
* Footer
    - Copyright
    - Links
    - Address
    - Contact
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01105937/16_big6-768x591.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="resturant-container">
                // Resturant Card
            </div>
        </div>
    )
};

const AppLayout = () => {
    return(<div className="app">
        <Header/>
    </div>)
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);