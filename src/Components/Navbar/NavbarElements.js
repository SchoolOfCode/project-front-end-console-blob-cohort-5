import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
background: rgba(225, 230, 240);
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) /2);
z-index: 1000;


min-width: 100%;
box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
position: fixed;

`
export const NavLink = styled(Link)`
color: lightblue;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
font-size: 1.7rem;
cursor: pointer; 

&.active{
    color: black;
}

&:hover{
    color:white;
    text-transform: lowercase;
    border : 1px solid white;
    border-radius: 25px;
    background: lightblue;
    
}
`

export const Bars = styled(FaBars)`
display: none;
color: ;

@media screen and (max-width: 768px){
    display:block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
   
}
`
export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: 10%;

@media screen and (max-width: 768px){
    display: none;
}
`


