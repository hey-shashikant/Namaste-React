import RestaurantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfResturants, setListOfResturant] = useState(resList);
   

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