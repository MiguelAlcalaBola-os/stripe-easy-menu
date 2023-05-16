import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import firebase from "../firebase/firebaseClient";
import { useAuthState } from "react-firebase-hooks/auth";
import { createCheckoutSession } from "../stripe/createCheckoutSession";
import usePremiumStatus from "../stripe/usePremiumStatus";
import Banner from "../components/Logueado/Banner";
import Beneficios from "../components/Logueado/Beneficios";
import styled, { keyframes } from "styled-components";
import Loading from "../components/Loading";
import Precios from "../components/Logueado/Precios";
import Navbar from "../components/Logueado/Navbar";
import Footer from "../components/Footer";
import PlantillasDeMenu from "../components/Mainpage/PantillasDeMenu";
import Economico from "../components/Suscrito/Economico";
import Premium from "../components/Suscrito/Premium";

export default function Home() {
  const [user, userLoading] = useAuthState(firebase.auth());
  const userIsPremium = usePremiumStatus(user);
  const [selectedPrice, setSelectedPrice] = useState("");

  useEffect(() => {
    // Obtener el ID del producto de la última sesión de pago del usuario logueado
    if (user) {
      firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .collection("checkout_sessions")
        .orderBy("created", "desc")
        .limit(1)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const { price } = doc.data();
            setSelectedPrice(price);
          });
        })
        .catch((error) => {
          console.log("Error al obtener el ID del producto: ", error);
        });
    }
  }, [user]);

  return (
    <div>
      {!user && userLoading && (
        <LoadingScreen>
          {/*<LoadingImage src="https://i.ibb.co/DCpYb69/easy-menu.png" alt="Loading" />*/}
          <LoadingSpinner />
          <LoadingText>
            Easy Menu esta registrando tu cuenta en su base de datos
          </LoadingText>
        </LoadingScreen>
      )}
      {!user && !userLoading && <Login />}
      {user && !userLoading && (
        <div>
          {!userIsPremium ? (
            <>
              <Navbar />
              {
                //<h1>Hello, {user.displayName}</h1>
              }

              <Banner />
              <Precios />
              <Beneficios />
              <PlantillasDeMenu />
              <Footer />
            </>
          ) : (
            <>
              {selectedPrice === "price_1N6eFsCfe2vkcWgLURNCrKp8" && (
                <Economico />
              )}
              {selectedPrice === "price_1N6eH0Cfe2vkcWgLvgPj0ICS" && (
                <Premium />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

/*export default function Home() {
  const [user, userLoading] = useAuthState(firebase.auth());
  const userIsPremium = usePremiumStatus(user);
  const [selectedPrice, setSelectedPrice] = useState("");


  


  return (
    <div >
      {!user && userLoading && 
        <LoadingScreen>
          <LoadingImage src="https://i.ibb.co/DCpYb69/easy-menu.png" alt="Loading" />
          <LoadingSpinner />
          <LoadingText>Easy Menu esta registrando tu cuenta en su base de datos</LoadingText>
        </LoadingScreen>
      }
      {!user && !userLoading && <Login />}
      {user && !userLoading && (
        <div>
          {!userIsPremium ? (
            <>
              <Navbar/>
              <h1>Hello, {user.displayName}</h1>
              <button onClick={() => {
                createCheckoutSession(user.uid, "price_1N6OITB9DtF8ONv4k9I3THyn");
                setSelectedPrice("price_1N6OITB9DtF8ONv4k9I3THyn");
              }}>
                4,99
              </button>
              <br></br> <br></br>
              <button onClick={() => {
                createCheckoutSession(user.uid, "price_1N6UQwB9DtF8ONv4ULbmNFpO");
                setSelectedPrice("price_1N6UQwB9DtF8ONv4ULbmNFpO");
              }}>
                8,99
              </button>
              <Banner/>
              <Beneficios/>
  
            </>
          ) : (
            <>
            {selectedPrice === "price_1N6OITB9DtF8ONv4k9I3THyn" && (
              <h2>Precio 1</h2>//estos mensajes me salen en blanco no obtiene el id del producto
            )}
            {selectedPrice === "price_1N6UQwB9DtF8ONv4ULbmNFpO" && (
             <h2>Precio 2</h2>//estos mensajes me salen en blanco no obtiene el id del producto
             )}
             

             </>

          )}
        </div>
      )}
    </div>
  );
}
*/

// Animación del spinner
const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Componente principal de la pantalla de carga
const LoadingScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// Imagen de carga
const LoadingImage = styled.img`
  width: 30em;
  height: 30em;
`;

// Texto de carga
const LoadingText = styled.p`
  font-size: 24px;
  margin-top: 16px;
`;

// Spinner de carga
const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: ${spinAnimation} 0.8s linear infinite;
  margin-top: 16px;
`;
