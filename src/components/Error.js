import { useRouteError } from "react-router-dom";

import { ERROR_URL } from "../utils/constants";

const Error = () => {

    const error = useRouteError();
    console.log(error);
    return(
        <div className="error-container">
            <h1>Oops!!!</h1>
            <h2>Something went wrong</h2>
            <h3>{error.status}: {error.statusText}</h3>
            <h3>{error.error.message}</h3>
            <img src={ERROR_URL} alt="error" />
            
        </div>
    );
}

export default Error;