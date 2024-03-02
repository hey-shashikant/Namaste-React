import RestaurantCard from "./ResturantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="resturant-container">
                {resList.map(resturant => 
                <RestaurantCard key={resturant.info} resturantData={resturant}
                />)}
            </div>
        </div>
    );
};

export default Body;