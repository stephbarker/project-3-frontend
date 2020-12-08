import {Link} from 'react-router-dom';
import './Header.css';

function Header(props) {
    return (
        <header className="Header">
            <Link to='/'>
            <h1>My Project</h1>
            </Link>
            <nav>
                <ul className="NavLinks"> 
                    <li><Link to='/logout'>Log Out</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                    <li><Link to='/login'>Log In</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;