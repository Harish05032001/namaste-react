import React, { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const {restaurantId} = useParams();

    const resMenuInfo = useRestaurantMenu(restaurantId);
    const [showIndex, setShowIndex] = useState(null);


    if(resMenuInfo === null) return <Shimmer />

    const {name, cuisines, avgRatingString,totalRatingsString, costForTwoMessage, areaName, sla } = resMenuInfo?.cards[2]?.card?.card?.info;

    // console.log("aaa",resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR)
    const  itemsCards   = resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    const categories = resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c) => c.card?.["card"]?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    return (
        <div className='text-center'>
            <h1 className='font-extrabold text-[40px]'>{name}</h1>
            <h3 className='font-bold text-lg'> {avgRatingString} ({totalRatingsString})</h3>
            <h3 className='font-bold text-lg'>{costForTwoMessage}</h3>
            <h3 className='font-bold text-lg'>{cuisines.join(", ")}</h3>
            <h3 className='font-bold text-lg'>Outlet {areaName}</h3>
            <h3 className='font-bold text-lg'>{sla?.deliveryTime} mins</h3> 
        
            <h3 className='font-bold text-lg text-orange-300 mt-12'>Menu:</h3> 
            <div className='menus'>
                <ul>
                    {itemsCards?.map((item,index) => <li key={item.card.info.id}>{index+1}. {item.card.info.name} - {"Rs. "} {item.card.info.defaultPrice/100}</li>)}
                </ul>
            </div>

            {/* //cateries accordian */}
            <div>
                     {categories.map((category, index) => <RestaurantCategory 
                     key={category?.card?.card?.categoryId} 
                     items={category?.card?.card} 
                     showItems = {index == showIndex ? true : false}
                     setShowIndex = {()=> setShowIndex(index)}
                     />)}
            </div>

        </div>
    )
}

export default RestaurantMenu;