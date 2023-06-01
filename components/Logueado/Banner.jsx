import React from "react";
import styled from "styled-components";
import Parrafos from "../Mainpage/Parrafos";
import { SiFacebook } from "react-icons/si";

import firebase from "../../firebase/firebaseClient";

import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement } from "@stripe/react-stripe-js";
import { createCheckoutSession } from "../../stripe/createCheckoutSession";
import { useAuthState } from "react-firebase-hooks/auth";

/*const stripePromise = loadStripe("pk_test_51N5M7sFCyqHa7htyW02KpvuE730UhmwRURZlryG45aZcw8O9z2ooU2rDlGF2nE0KM639nTGkCavRZB210dDSJFfl00zM8INZGp")
 */

/*const Checkoutform=()=>{
  return <form>

    <CardElement/>
  </form>
}*/

/*const handleClick = async () => {
  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: 'price_1N6OITB9DtF8ONv4k9I3THyn', quantity: 1 }],
    mode: 'payment',
    successUrl: 'https://en.wikipedia.org',
    cancelUrl: 'https://yourwebsite.com/cancel',
  });
  if (error) {
    console.log(error);
  }
};
*/

function Banner() {
  const [user] = useAuthState(firebase.auth());

  return (
    <div className="padre">
      <div className="container">
        <Container>
         <Texts>
            <h1 className="green">
              Crear y modificar su menu se convirtió en un juego de niños
            </h1>

            <p>
              En el competitivo mundo de la industria de restaurantes, la
              presentación y la facilidad de acceso de tu menú pueden marcar la
              diferencia entre el éxito y el estancamiento. Es por eso que te
              presentamos Menu-Easy, una herramienta en línea diseñada
              específicamente para dueños de restaurantes que desean crear menús
              atractivos y funcionales de manera sencilla. Permíteme mostrarte
              por qué Menu-Easy es la elección perfecta para elevar la
              experiencia de tus clientes y optimizar tus operaciones.
            </p>
            <Parrafos />
            <p>
              Creamos menús tan rápido y fácil que no sentirás que es un trabajo
              facilitando así tu vida, puedes descargar tu menú en formato PDF
              para hacer con él lo que plazcas.
            </p>
<Flex>
            <button
              onClick={() => {
                createCheckoutSession(
                  user.uid,
                  "price_1N6eFsCfe2vkcWgLURNCrKp8"
                );
              }}
            >
              Comprar Paquete Básico 9,99€
            </button>
            <br></br> <br></br>
            <button
              onClick={() => {
                createCheckoutSession(
                  user.uid,
                  "price_1N6eH0Cfe2vkcWgLvgPj0ICS"
                );
              }}
            >
              Comprar paquete Premium 30€ HT
            </button>
          </Flex> 
           {/*
 
    <Social>
        <p>Nuestras redes</p>
        <div className='social-icons'>
            <span><a href='#'><SiFacebook/></a></span>
            <span><a href='#'><SiFacebook/></a></span>
        </div>
    </Social> 
    */}
          </Texts>
          <Profile>
          <img src="https://i.ibb.co/0jRMs1Q/Img-Banner.png"></img></Profile>
        </Container>
        <br/>
        <br/>
      </div>
    </div>
  );
}

export default Banner;

/*async function signInWithGithub() {
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
}*/

const Flex = styled.div`
  display: flex;
  flex: 1;
 
`
const Space = styled.div`
  margin: 1em;
`;
const Container = styled.div`

  font-family: "Secular One", sans-serif;
  display: flex;
  gap: 2rem;

  width: 90%;
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
    font-family: "Secular One", sans-serif;
  }
  h1 {
    color: #04b6bf;
    font-size: 1.8rem;
    font-family: "Secular One", sans-serif;
  }
  h3 {
    font-weight: 500;
    font-size: 1.5rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
    font-family: "Secular One", sans-serif;
  }
  p {
    font-weight: 300;
    font-size: 1.2rem;
    font-family: "Secular One", sans-serif;
  }
  button {
    
    margin: 2rem 4rem;
    padding: 0.7rem 2rem;
  

    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    margin-top: 2rem;
    
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
      
    }
  }
`;
const Social = styled.div`
  margin-top: 1rem;
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
    margin-top: 2rem;
    width: 26rem;
    /* filter: drop-shadow(0px 10px 10px #01be9570); */
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
