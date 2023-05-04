import React from 'react'
import styled from 'styled-components'
import Img from "../../Assets/easy_menu.png"
import { SiFacebook } from "react-icons/si";
import firebase from "../../firebase/firebaseClient";
function Banner() {
  return (
<div className='padre'>
 <div className='container'>
<Container>
<Texts>
  
   <h1 className='green'>
    wfowmfnwef</h1> 
    <h3>wiiiiiiiiiiiii</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum praesentium explicabo ducimus cum provident ut possimus at dignissimos nam nemo. Suscipit tempora corporis voluptatibus laborum illo culpa rerum impedit quae.</p>
    <button onClick={() => signInWithGithub()}>Comprar Paquete Pro 4,99</button>
  <Space/>
    <button onClick={() => signInWithGithub()}>Comprar paquete max 8,99</button>

    <Social>
        <p>Nuestras redes</p>
        <div className='social-icons'>
            <span><a href='#'><SiFacebook/></a></span>
            <span><a href='#'><SiFacebook/></a></span>
        </div>
    </Social>
</Texts>
<Profile>
<img src="https://i.ibb.co/DCpYb69/easy-menu.png"></img>
</Profile>
</Container>
</div>   
</div>  
  )
}

export default Banner
async function signInWithGithub() {
  const userCredentials = await firebase
    .auth()
    .signInWithPopup(new firebase.auth.GithubAuthProvider());

  console.log({ ...userCredentials.user });

  firebase.firestore().collection("users").doc(userCredentials.user.uid).set({
    uid: userCredentials.user.uid,
    email: userCredentials.user.email,
    name: userCredentials.user.displayName,
    provider: userCredentials.user.providerData[0].providerId,
    photoUrl: userCredentials.user.photoURL,
  });
}
const Space = styled.div`
margin: 1em;
`
const Container = styled.div`

  display: flex;
  gap: 2rem;
  padding-top:4rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 3rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.5rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
    font-size: 1.2rem;
  }
  button {
    padding: 0.7rem 2rem;
    margin-top: 1rem;
  
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }
  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }
    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 35rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }
    @media (max-width: 660px) {
      width: 18rem;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  }
  :hover img {
    transform: translateY(-10px);
  }
`;