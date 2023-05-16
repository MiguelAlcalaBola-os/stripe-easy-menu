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
        <h2>EASY <span>MENU</span></h2>
        <h1>Hello, {user.displayName}</h1> 
        <div className={`links ${clicked ? 'active' : ''}`}>
      
        <LogoutButton />


          <a href='#'>Salir</a>
        
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
/* 
 <Link to="/">Inicio</Link>
        
          <Link to="/ingresar">Ingresar</Link>
          <Link to="#h">Registrarse</Link>
          <Link to="#h">¿Quienes Somos?</Link>*/
const NavContainer = styled.nav`
  h2{
    font-family: "Secular One", sans-serif;
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  font-family: "Secular One", sans-serif;
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    font-family: "Secular One", sans-serif;
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    font-family: "Secular One", sans-serif;
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      font-family: "Secular One", sans-serif;
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-family: "Secular One", sans-serif;
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }

  .links.active{
    font-family: "Secular One", sans-serif;
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222222;
  position:absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }`