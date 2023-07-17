import { Link } from 'react-router-dom';

export default function Header(){

    return(
        <header className='flex justify-between items-center'>
            <h1>
                <Link to='/'>Shoppy</Link>
            </h1>

            <nav>
                <ul className='flex justify-between items-center'>
                    <li className="mr-4">
                        <Link to='/products'>Products</Link>
                    </li>
                    <li className="mr-4">
                        <Link to='/cart'>Cart</Link>
                    </li>
                    <li>
                        <button>Login</button>
                    </li>
                </ul>
                
            </nav>
            
        </header>
    )
}