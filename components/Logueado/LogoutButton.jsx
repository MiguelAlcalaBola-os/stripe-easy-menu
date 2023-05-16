import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Función para desloguearse
function LogoutButton(){

  function handleLogout() {

  firebase.auth().signOut().then(() => {
    // Deslogueo exitoso
  }).catch((error) => {
    // Error al desloguearse
  });
  }

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );

}

export default LogoutButton;




/*function LogoutButton() {
  const firebase = useFirebaseApp();
  const history = useHistory();

  function handleLogout() {
    firebase.auth().signOut().then(() => {
      // La sesión se cerró correctamente
      // Elimina cualquier información de autenticación almacenada en la aplicación
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      // Redirige al usuario a la página de inicio de sesión
      history.push('/');
    }).catch((error) => {
      // Hubo un error al cerrar la sesión
      console.log(error);
    });
  }

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
*/
