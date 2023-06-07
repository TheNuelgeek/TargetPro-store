import './NavBar.css';
import HamburgerNavigator from "./HambugerNav/HambugerNav";
import logo from "./Assets/logo.svg";
import SearchBar from './SearchBar/SearchBar';
import { Link } from 'react-router-dom';


function NavBar(){
    return(
        <div className='nav-box'>
            <nav className='nav-container'>
                <Link to={"/"}  style={{textDecoration: 'none', color:'black'}}>
                    <div className="logo-box">
                    <img src={logo} alt="logo" />
                    <h2>Target Pro</h2>                
                    </div>
                </Link>
                <ul className='list-box'>
                    <li>NEWEST</li>
                    <li>MEN</li>
                    <li>WOMEN</li>
                    <li>KIDS</li>
                    <li>SALE</li>
                </ul>
                <div className="utilties">
                    <SearchBar />
                    <button className="block-store-btn"></button>
                    <HamburgerNavigator />
                </div>
            </nav>

        </div>
    )
}

export default NavBar;