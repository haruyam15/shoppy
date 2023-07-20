import { Link } from 'react-router-dom';
import { useFirebaseAPI } from '../context/FirebaseAPIContext';
import { useLogin } from '../context/LoginContext';

export default function Header(){
    const { firebase } = useFirebaseAPI();
    const {isLogin, userInfo} = useLogin();
    const handleLogin = ()=> {
        firebase.login();
    }

    const handleLogout = ()=> {
        firebase.logout();
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
                        <Link to={isLogin ? '/cart' : '/'}>Cart</Link>
                    </li>
                    
                    {isLogin && <li className="mr-4"><div className='flex items-center'><p className='w-7 rounded-full overflow-hidden mr-2'><img src={userInfo.photoURL} alt={userInfo.displayName} /></p>{userInfo.displayName}</div></li>}
                    {!isLogin && <li className="mr-4"><button onClick={handleLogin}>Login</button></li>}
                    {isLogin && <li><button onClick={handleLogout}>Logout</button></li>}

                </ul>
                
            </nav>
            
        </header>
    )
}