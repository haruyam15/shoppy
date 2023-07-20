import { createContext, useContext, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const LoginContext = createContext();

export function LoginContextProvider({children}){
    const auth = getAuth();
    const [userInfo, setUserInfo] = useState(null);
    const [isLogin, setIsLogin] = useState(false);

    onAuthStateChanged(auth, (user) => {
        setUserInfo(user);
        user ? setIsLogin(true) : setIsLogin(false);
    });

    const data = {userInfo, isLogin}

    return (
        <LoginContext.Provider value={data}>
            {children}
        </LoginContext.Provider>
    )
}

export function useLogin(){
    return useContext(LoginContext);
}