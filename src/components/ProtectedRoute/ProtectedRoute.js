import React from "react";

function ProtectedRoute({element: Component, ...props}) {
    React.useEffect(() => {
        if (!props.isLoggedIn) {
            props.onUnloggedClick()
        }
    }, [])

    return(
        props.isLoggedIn ? <Component {...props} /> : <></>
    )
};

export default ProtectedRoute;