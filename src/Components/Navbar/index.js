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
                    <NavLink to="/" activeStyle>
                        Home
                </NavLink>
                    <NavLink to="/UKPage" activeStyle>
                        UK
                    </NavLink>
                    <NavLink to="/WorldPage" activeStyle>
                        Abroad
                    </NavLink>
                    <NavLink to="/WwTracker" activeStyle>
                        World Stats
                </NavLink>
                </NavMenu>
            </Nav>

        </div>
    );
};

export default Navbar;

