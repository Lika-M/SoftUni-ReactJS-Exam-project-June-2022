import { createContext } from "react";
import  {useLocaleStorage}  from '../hooks/useLocalStorage.js'

export const AuthContext = createContext();

export function AuthProvider({ children}) {

    const [user, setUser] = useLocaleStorage('userData', {});

    function userLogin(userData) {
        setUser(userData);
    }

    function userLogout() {
        setUser({});
    }

    return (
        <AuthContext.Provider value={{ user, userLogin, userLogout }}>
            {children}
        </AuthContext.Provider>
    );
}

