import { useContext } from "react";
import { CDN_URL, STAR_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData.info;

  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-md">
      {/* style={{backgroundColor:"#DCDCDC"}} */}
      <img
        alt="meghna foods"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold">{name}</h3>
      <div className="flex justify-between font-medium">
        <h4 className="flex">
          {avgRating} <img src={STAR_URL} alt="starrating" className="w-6" />
        </h4>
        <h4>{sla?.deliveryTime} mins</h4>
      </div>
      <h4 className="font-extrabold">{costForTwo}</h4>
      <p>{cuisines.join(", ")}</p>
      <p className="font-bold">User : {loggedInUser}</p>
    </div>
  );
};

export default RestaurantCard;
