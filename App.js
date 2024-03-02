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
        - Img
        - Name of res, Star Rating, cusine, delivery time
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

// when you need to pass data to component you must pass it using props.
const RestaurantCard = (props) => {
    console.log(props);
    return (
        <div className="resturant-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="res-logo"
                alt="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi" 
            />
            <h3>{props.resturantName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.Rating}</h4>
            <h4>{props.DeliveryTime}</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="resturant-container">
                <RestaurantCard 
                    resturantName="Meghna Foods"
                    cuisine="Briyan, Kababs & Rolls"
                    Rating="4.4 stars"
                    DeliveryTime="40 minutes"
                />
                <RestaurantCard
                    resturantName="Empire Resturant"
                    cuisine="Buffet, Burger, Fries"
                    Rating="4.0 stars"
                    DeliveryTime="25 minutes"
                />
            </div>
        </div>
    );
};

const AppLayout = () => {
    return(<div className="app">
        <Header/>
        <Body/>
    </div>)
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
