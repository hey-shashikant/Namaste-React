import RestaurantCard from "./ResturantCard";
import { useEffect, useState } from "react";

const Body = () => {
    // Local State Variable - Super powerful variable (Hook)
    const [listOfResturants, setListOfResturant] = useState([]);
    // useEffect is a react hooks which takes two arguement a arrow function and second arguement is a dependency array.
    
    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // this fetch super power is given to us by browser(JS enginer)
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9580044&lng=77.7089009&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        setListOfResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    };
   

    // Normal JS Variable
    // let listOfResturants = resList;
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={ () => {
                    // filter logic here using Stata Hook.
                    
                    const filteredListofResturant = listOfResturants.filter(
                        (res) => parseFloat(res.info.avgRatingString) >= 4.5
                    );
                    setListOfResturant(filteredListofResturant);
                    console.log(listOfResturants);
                }} >
                    Top Rated Resturant
                </button>
            </div>
            <div className="resturant-container">
                {listOfResturants.map(resturant => 
                <RestaurantCard key={resturant.info} resturantData={resturant}
                />)}
            </div>
        </div>
    );
};

export default Body;