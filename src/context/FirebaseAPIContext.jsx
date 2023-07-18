import { createContext, useContext } from "react";
import Firebase from "../api/firebase";

export const FirebaseAPIContext = createContext();
const firebase = new Firebase();

export function FirebaseAPIProvider({children}){
    return <FirebaseAPIContext.Provider value={{firebase}}>
        {children}
    </FirebaseAPIContext.Provider>
}

export function useFirebaseAPI(){
    return useContext(FirebaseAPIContext);
}