import { Link } from 'react-router-dom';
import { useFirebaseAPI } from '../context/FirebaseAPIContext';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';

export default function Header(){
    const { firebase } = useFirebaseAPI();
    const auth = getAuth();
    const [isLogin, setIsLogin] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const uid = user.uid;
                setIsLogin(true);
                setUserInfo({
                    name : user.displayName,
                    thumb : user.photoURL
                })
            } else {
                // User is signed out
                setIsLogin(false);
            }
        });
    },[])
    
    const handleLogin = ()=> {
        firebase.login();
    }

    const handleLogout = ()=> {
        firebase.logout();
        setIsLogin(false);
    }

    return(
        <header className='flex justify-between items-center py-8'>
            <Link to='/'><h1 className='font-bold'>Shoppy</h1></Link>

            <nav>
                <ul className='flex justify-between items-center'>
                    <li className="mr-4">
                        <Link to='/products'>Products</Link>
                    </li>
                    <li className="mr-4">
                        <Link to='/cart'>Cart</Link>
                    </li>
                    
                    {isLogin && <li className="mr-4"><p>{userInfo.name}</p></li>}
                    {!isLogin && <li className="mr-4"><button onClick={handleLogin}>Login</button></li>}
                    {isLogin && <li><button onClick={handleLogout}>Logout</button></li>}
                </ul>
                
            </nav>
            
        </header>
    )
}