function ProtectedRoute({element: Component, ...props}) {
    return(
        props.isLoggedIn ? <Component {...props} /> : props.onUnloggedClick()
    )
};

export default ProtectedRoute;