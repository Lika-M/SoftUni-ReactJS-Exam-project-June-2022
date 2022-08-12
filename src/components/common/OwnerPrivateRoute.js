import { Navigate} from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext.js";
import { DataContext } from "../../contexts/DataContext.js";

export function OwnerPrivateRoute({children}) {
    const { user } = useContext(AuthContext);
    const { plants } = useContext(DataContext);

    const myItem = plants.items.find(x => x._ownerId === user._id)

    if (!myItem) {
        return <Navigate to={'/login'} replace />
    }
    return children;
}