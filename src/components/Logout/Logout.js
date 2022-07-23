import { Navigate } from 'react-router-dom';
import * as authService from '../../services/authService.js';

export default function Logout(
    onLogout
) {

    authService.logout()
    .then((res) => {
        console.log('logout')    
    })

    onLogout();
  
    return <Navigate to="/" replace={true}/>

}