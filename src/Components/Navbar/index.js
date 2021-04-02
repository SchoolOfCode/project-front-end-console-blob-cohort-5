import React from 'react';
import { Nav, NavLink, Bars, NavMenu, } from './NavbarElements.js';
import logo from "./TS.png"




const Navbar = () => {
    return (

        <div>
            <Nav data-testid="nav">
                <NavLink to="/">
                    <img src={logo} style={{height:"100%"}} />

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
                    <NavLink to="/WorldTracker" activeStyle>
                        World Stats
                </NavLink>
                </NavMenu>
            </Nav>

        </div>
    );
};

export default Navbar;

