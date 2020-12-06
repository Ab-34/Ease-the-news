import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
  

const Navbar = () => {
    return (
        <>
            <Nav>
        <NavLink to='/'>
          <h1 style={{fontFamily:'Anton, san-serif'}}>Ease the News</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/business' activeStyle>
            Business
          </NavLink>
          <NavLink to='/sports' activeStyle>
            Sports
          </NavLink>
          <NavLink to='/politics' activeStyle>
            Health
          </NavLink>
          <NavLink to='/entertainment' activeStyle>
            Entertainment
          </NavLink>
          <NavLink to='/science' activeStyle>
            Science
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signup'>subscribe</NavBtnLink>
        </NavBtn>
      </Nav>
        </>
    )
}

export default Navbar
