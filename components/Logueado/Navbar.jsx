import React, { useState } from 'react'
import styled from 'styled-components'
import Burgerbutton from "../Logueado/Burgerbutton";
import { BrowserRouter, Link, Outlet } from "react-router-dom"

import 'firebase/compat/auth';
import { useHistory } from 'react-router-dom';
import LogoutButton from '../Logueado/LogoutButton';
import { useAuthState } from "react-firebase-hooks/auth";
import { FirebaseAppProvider } from 'reactfire';
import firebase from "../../firebase/firebaseClient";
 

function Navbar() {

  const [user, userLoading] = useAuthState(firebase.auth());
 
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }

  return (
    
<>

      <NavContainer>
      <img src="https://i.ibb.co/pKXRwHc/EASY-MENU-nuevo-logo-1.png"></img>
    
        <h1>Hello, {user.displayName}</h1> 
        <div className={`links ${clicked ? 'active' : ''}`}>
      
        <LogoutButton />


       
        
<Outlet/>

        </div>
        <div className='burguer'>
          <Burgerbutton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
  </>

    
  )
}

export default Navbar

const NavContainer = styled.nav`

h1{

color: #31bfbf;
font-family: "Secular One", sans-serif;
font-size: 30px;
}
 button {
  margin-right: 4.7rem;
    font-size: 14px;
    padding: 0.9rem 1.8rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    font-family: "Secular One", sans-serif;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
img{
  margin-left: 4.5rem;
  width: 13rem;
}
  h2 {
    font-family: "Secular One", sans-serif;
    color: #6cbdff;
    font-weight: 400;
    span {
      color: #6cbdff;
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: #fcfcfc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: #000000;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: #000000;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: #000000;
        display: inline;
        font-family: "Secular One", sans-serif;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #222222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;