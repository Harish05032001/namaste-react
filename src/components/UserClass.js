import React from 'react'

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"Default name",
                location:"Default location",
            },
        };

    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Harish05032001")
        const json = await data.json();
        this.setState({
            userInfo: json,
        });

        console.log("github user api info",json)
        
    }

    render(){

        const{name,location,avatar_url,blog,bio,email} = this.state.userInfo;

        return(
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>{name}</h2>
                <h5>{bio}</h5>
                <h4>{location}</h4>
                <a href={blog}  target='_blank'>Portfolio</a>
                <h4>harishprvn@gmail.com</h4>
                <p>
                Our Website is a model of new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.
                </p>
    
            </div>
        );
    }
}

export default UserClass