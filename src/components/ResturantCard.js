import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resturantData} = props;

    const {
        cloudinaryImageId,
        name,
        avgRatingString,
        cuisines,
        costForTwo,
        deliveryTime
    } = resturantData?.info;

    return (
        <div className="resturant-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="res-logo"
                alt="res-logo"
                src={
                    CDN_URL + cloudinaryImageId
                }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
};

export default RestaurantCard;