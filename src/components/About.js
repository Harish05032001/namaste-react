// import User from "./User";
import { useContext } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
const About = () =>{
    const {loggedInUser} = useContext(UserContext)
    return(
        <div className="about-container">
            <h1 className="font-extrabold text-3xl">About Us</h1>
            <p className="font-bold">User : {loggedInUser}</p>
            <UserClass/>
        </div>
    );
}

export default About;