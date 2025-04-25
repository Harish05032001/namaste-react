import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({items, showItems, setShowIndex}) => {

  // const [showItems, setShowItems] = useState(false)
  const handleClick = ()=>{
    // console.log("showItems",showItems)
    // setShowItems(!showItems);
    setShowIndex();
  }

  return (
    <div>
        
        <div className='w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 cursor-pointer' onClick={handleClick}>
          <div className='flex justify-between' >
            <span className='font-bold text-lg'>
              {items.title} ({items.itemCards.length})
            </span>
            <span className='text-black'>▼</span>
          </div>

          <div>
            {showItems && <ItemList data={items.itemCards}/>}
          </div>
        </div>
         
    </div>
  )
}

export default RestaurantCategory;