import React, { Component } from 'react';

import {NavLink} from "react-router-dom";

import logo from "../logo.svg";

import styled from "styled-components";

import {ButtonContainer} from "./Button" 


export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
       
        <NavLink to="/">
        <img src={logo} alt="store" className="navbar-brand"></img> 
        </NavLink>
        <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
        <NavLink to="/" className="nav-link">
        products
        </NavLink>
        </li>
        </ul>
        <NavLink to="/cart" className="ml-auto">
        <ButtonContainer>
         <span><i className="fas fa-cart-plus"/> my cart </span> 
        </ButtonContainer>
        </NavLink>

      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;



}  `


