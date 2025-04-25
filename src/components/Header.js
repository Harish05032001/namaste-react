import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  console.log("loggedInUser",loggedInUser)

  //if no dependency array (i.e) the useeffect calls on every component render
  // if the dependency array is empty = [] => useeffect will call on initial render(just once)
  // if the dependency array is [btnName] => called everytime btnName is updated
  // useEffect(()=>{
  // },[])

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 p-2 h-auto">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Backerylogo" className="w-30"/>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {onlineStatus ? "🟢" : "🔴"} 
          </li>
          <li className="px-4">
            <Link to="./">Home</Link>
          </li>
          <li className="px-4">
              <Link to="./about">About Us</Link>
          </li>
          <li className="px-4">
              <Link to="./contact">Contact Us</Link>
          </li>
          <li className="px-4">
              <Link to="./grocery">Grocery</Link>
          </li>
          <li className="px-4">
              <Link to="./cart">Cart</Link>
          </li>
        </ul>
        <button
            className="border border-solid border-orange-600 bg-amber-500 px-2 py-1 rounded-sm cursor-pointer m-2"
            onClick={() => {
                btnName === "Login" ? 
            setBtnName("Logout") : setBtnName("Login");

            }}
        >
            {btnName}
        </button>
          <p className="px-4 font-bold">
                {loggedInUser}
          </p>
      </div>
    </div>
  );
};

export default Header;
