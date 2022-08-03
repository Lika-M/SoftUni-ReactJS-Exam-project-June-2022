import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService.js'
import { AuthContext } from '../../contexts/AuthContext.js';

export default function Logout() {
    const navigate = useNavigate();
    const { user, userLogout } = useContext(AuthContext);

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                userLogout();
                navigate('/')
            });
    }, [user.accessToken, userLogout, navigate]);
    
    return null;
    //or spinner until the promise is resolved
}