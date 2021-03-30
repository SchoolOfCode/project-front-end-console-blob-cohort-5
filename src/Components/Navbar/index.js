import React from 'react';
import { Nav, NavLink, Bars, NavMenu, } from './NavbarElements.js';

const Navbar = () => {
    return (

        <div>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>

                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/Home" activeStyle>
                        Home
                </NavLink>
                    <NavLink to="/UK" activeStyle>
                        UK
                    </NavLink>
                    <NavLink to="/Abroad" activeStyle>
                        Abroad
                    </NavLink>
                    <NavLink path="/World_stats" activeStyle>
                        World Stats
                </NavLink>
                </NavMenu>
            </Nav>

        </div>
    );
};

export default Navbar;

