import {NavLink} from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='main-nav nav-bar d-flex justify-content-between'>
            <NavLink to='/' className='navbar-brand'>Quotes Central</NavLink>
            <div>
            <NavLink to='/quotes' className='navbar-brand pe-4'>Quotes</NavLink>
                |
            <NavLink to='/new-quote' className='navbar-brand ps-4'>Submit new quote</NavLink>
            </div>
        </div>
    );
};

export default NavBar;