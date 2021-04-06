import React from 'react';
import { Nav, NavLink, Bars, NavMenu, } from './NavbarElements.js';
import logo from "./travelsafev2.png";




const Navbar = () => {
    return (

        <div>
            
            <Nav data-testid="nav">                                   
                {/* <NavLink to="/" >
                    <img src={logo} />

                </NavLink> */}
                <div><img src={logo} /></div>
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

                    <NavLink to="/TravelTipsPage" activeStyle>
                        Travel Tips
                    </NavLink>
                </NavMenu>
            </Nav>

        </div>
    );
};

export default Navbar;

