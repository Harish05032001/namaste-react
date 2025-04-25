//Custom Hook - useRestaurantMenu()

import React, { useState, useEffect } from 'react';
import { MENU_API } from '../utils/constants';

const useRestaurantMenu = (restaurantId) => {

    const [resMenuInfo, setResMenuInfo] = useState(null);
    
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch(MENU_API + restaurantId);
        const json = await data.json();
        setResMenuInfo(json?.data);
    };

    return resMenuInfo;
}

export default useRestaurantMenu;