import RestaurantCard from "./ResturantCard";
import resList from "../utils/mockData";

const Body = () => {
    let listOfResturants = resList;
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={ () => {
                    // filter logic here.
                    listOfResturants = listOfResturants.filter(
                        (res) => parseFloat(res.info.avgRatingString) >= 4.5
                    );
                    console.log(listOfResturants);
                }} >
                    Top Rated Resturant
                </button>
            </div>
            <div className="resturant-container">
                {resList.map(resturant => 
                <RestaurantCard key={resturant.info} resturantData={resturant}
                />)}
            </div>
        </div>
    );
};

export default Body;