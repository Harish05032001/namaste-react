import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";


//chunker
//Lazy loading
//on demand loading
//Smaller bundling
//Code splitting
//Dynamic Bundling

const Grocery = lazy(() => import("./components/Grocery"));


const App = () => {

    //Authentication Code
    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            name:"Harish R"
        };
        setUserName(data.name);
    },[]);

    return (
        <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
            <div className="app ml-10 mr-10">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>} ><Grocery /></Suspense>,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/restaurants/:restaurantId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

//JSX - is not html in JS, its only HTML like syntax
//JSX(Converted before it reaches the JS engine) by BABEL which is available in PARCEL
// JSX => React.createElement => ReactElement-JS object => HTMLElement(render) ------> This was done by BABEL
//Component is a normal js function which returns a JSX

// React.createElement => ReactElement-JS object => HTMLElement(render)
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Vanakam da React🚀"
// );

// const parent = React.createElement("div",{id:"parent"},
//     [
//         React.createElement(
//             "div",
//             {id:"child1"},
//             [React.createElement("h1",{},"Im the h1 tag !!!!"),React.createElement("h2",{},"Im the h2 tag !!!!")]
//         ),
//         React.createElement(
//             "div",
//             {id:"child2"},
//             [React.createElement("h3",{},"Im the h3 tag !!!!"),React.createElement("h4",{},"Im the h4 tag !!!!")]
//         )
//     ]
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
