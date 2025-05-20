import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import resList from "../utils/mockData";
import useOnlineStatus from '../utils/useOnlineStatus';
import { RESTAURANTS_URL } from '../utils/constants';
import UserContext from "../utils/UserContext";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  //updates the user name in all components during onchange 
  const {loggedInUser, setUserName} = useContext(UserContext);

  console.log("listOfRestaurants", listOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  //api call
  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_URL);
    const json = await data.json();

    //optional chaining ?.
    const constructedData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log("constructedData",constructedData)
    setListOfRestaurants(constructedData);
    setFilteredRestaurants(constructedData);
  };

  const onlineStatus = useOnlineStatus();

    if(onlineStatus == false){
        return(
            <h1 className="font-extrabold text-xl">Please check your internet connection....!!!!</h1>
        );
    }

  //Conditional rendering --> rendering happens acc to the condition

  return listOfRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
        
        <div className="block bg-gray-800">
            <div>
                <h3 className="font-extrabold text-xl text-white m-2">Filters for online Shopping</h3>
            </div>
            <div className="p-4 flex items-center">
                <input
                    type="text"
                    className="text-white border border-solid border-white w-70 h-8 rounded-md"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                ></input>

                <button
                    className="px-4 py-1 bg-green-100 m-4 cursor-pointer rounded-sm"
                    onClick={() => {
                        console.log(searchText);
                        const filteredRestaurantBySearch = listOfRestaurants.filter(
                        (res) =>
                            res.info.name.toUpperCase().includes(searchText.toUpperCase())
                        );
                        setFilteredRestaurants(filteredRestaurantBySearch);
                    }}
                >
                    Search
                </button>
                <div className="m-2 p-2 flex items-center">
                    <button
                        className="px-2 py-1 bg-orange-300 rounded-sm cursor-pointer"
                        onClick={() => {
                        console.log(listOfRestaurants);
                        let filteredListOfRestaurants = listOfRestaurants.filter(
                            (lor) => lor.info.avgRating > 4.3
                        );
                        setFilteredRestaurants(filteredListOfRestaurants);
                        }}
                    >
                        Top Rated Restaurants
                    </button>

                    <button
                        className="px-2 py-1 bg-orange-300 rounded-sm ml-1 cursor-pointer"
                        onClick={() => {
                        console.log("listOfRestaurants", listOfRestaurants);
                        let filteredFastestDelivery = listOfRestaurants.filter(
                            (res) => res.info.sla.deliveryTime < 22
                        );
                        setFilteredRestaurants(filteredFastestDelivery);
                        }}
                    >
                        Fastest Delivery
                    </button>

                    <button
                        className="px-2 py-1 bg-gray-300 rounded-sm ml-1 cursor-pointer"
                        onClick={() => {
                        console.log(listOfRestaurants);
                        setFilteredRestaurants(listOfRestaurants);
                        setSearchText("");
                        }}
                    >
                        Clear Filter
                    </button>
                </div>
                <div className="m-2 p-2 flex items-center">
                    <label className="text-white">User Name</label>
                    <input className="border border-white p-2 rounded-sm text-white ml-2" 
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)} 
                    />
                </div>
            </div>

            

            
        </div>

        <div className="flex-wrap flex">
            {filteredRestaurants.map((res) => (
                <Link key={res.info.id} to={"/restaurants/"+res.info.id}>
                    <RestaurantCard  resData={res} />
                </Link>
            ))}
        </div>
    </div>
  );
};

export default Body;
