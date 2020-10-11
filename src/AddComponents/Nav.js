import React, {Component} from 'react';
import {MenuItem} from "./MenuItem";
import {NavLink} from "react-router-dom";
import '../scss/menu.scss';
class Nav extends Component {
    render() {
        return (
            <div className='menu'>
                <nav className='NavbarItems'>
                    <div className='navbar'>
                        <h3 className='logo'> Menu </h3>
                        <div className='MenuIcon'>
                            <i className="fab fa-500px" color='white'></i>
                        </div>
                    </div>
                    <ul>
                        {MenuItem.map((item, index) => {
                            return (
                                <NavLink key={index}  to={item.url} className='li'>
                                <li >
                                        {item.title}
                                </li>
                        </NavLink>
                            )
                        })}
                    </ul>

                </nav>
            </div>
        );
    }
}

export default Nav;





























