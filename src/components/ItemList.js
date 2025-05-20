import React from 'react'
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({data}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch our item
        dispatch(addItem(item))
    }

  return (
    <div>
        {data.map((i) => {
            return(
                <div key={i.card.info.id} className='p-2 m-2 border-gray-400 border-b-2 text-left'>
                    <div className='flex justify-between'>
                        <div className='p-2'>
                            <span className='font-bold '>{i.card.info.name}</span>
                            <span>- ₹ {i.card.info.price ? i.card.info.price/100 : i.card.info.defaultPrice / 100}</span>
                        </div>

                    </div>
                    <div>
                        <div className='absolute'>
                            <button className='p-1 mx-16 bg-black text-white shadow-lg rounded-sm text-sm mt-12 cursor-pointer' onClick={()=>handleAddItem(i)}>Add+</button>
                        </div>
                        <img className='w-30' src={CDN_URL+i.card.info.imageId} />
                    </div>

                    <p className='flex-wrap'>{i.card.info.description}</p>

                </div>
            );
        })}
    </div>
  );
}

export default ItemList