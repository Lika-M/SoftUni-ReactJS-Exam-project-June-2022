import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService.js'
import { AuthContext } from '../../contexts/AuthContext.js';

export default function Logout() {
    const { user, userLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                userLogout();
                navigate('/', { replace: true })
            });
    }, [user.accessToken]);
    
    return null;
}