import { useEffect, useState } from "react";

const User = () => {
    const[count,setCount] = useState(0)

    useEffect(()=>{
        //Api Calls
    },[]);

    // async function getUserInfo(){
    //     const data = await fetch();
    // }

    return(
        <div className="user-card">
            <p>{count}</p>
            <button onClick={()=>{
                setCount(
                     count+1
                )
            }}>Increase count</button>
            <h2>Name:</h2>
            <h4>Location: </h4>
            <h4>Contact: </h4>

        </div>
    );
}

export default User;