import React from 'react';
import { Nav, NavLink, Bars, NavMenu, } from './NavbarElements.js';
<<<<<<< HEAD
import logo from "./travelsafev2.png"
=======
import logo from "./travelsafev2.png";
>>>>>>> mafewk




const Navbar = () => {
    return (

        <div>
            
            <Nav data-testid="nav">                                   
<<<<<<< HEAD
                <NavLink to="/" activeStyle>
                    <img src={logo} style={{height:"100%"}}/>
=======
                {/* <NavLink to="/" >
                    <img src={logo} />
>>>>>>> mafewk

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
                </NavMenu>
            </Nav>

        </div>
    );
};

export default Navbar;

