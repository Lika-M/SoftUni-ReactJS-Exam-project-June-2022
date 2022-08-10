import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext.js";

export  function UserPrivateRoute() {
    const { user } = useContext(AuthContext);

    if (!user._id) {
        return <Navigate to={'/login'} replace />
    }
    return <Outlet />
}