// import { useState } from "react";
// import { auth } from "./firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword
// } from "firebase/auth";
// import {
//   GoogleAuthProvider,
//   signInWithPopup
// } from "firebase/auth";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const register = async () => {
//     try {
//       const userCredential =
//         await createUserWithEmailAndPassword(auth, email, password);
//       console.log("Usuario registrado:", userCredential.user);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   const login = async () => {
//     try {
//       const userCredential =
//         await signInWithEmailAndPassword(auth, email, password);
//       console.log("Usuario logueado:", userCredential.user);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   const provider = new GoogleAuthProvider();

// const loginWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(auth, provider);
//     console.log("Usuario Google:", result.user);
//   } catch (error) {
//     console.error(error.message);
//   }
// };

//   return (
//     <div>
//       <h2>Login Firebase</h2>

//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />
//       <br />
//       <button onClick={register}>Registrarse</button>
//       <button onClick={login}>Login</button>
//        <br />
//        <br />
//       <button onClick={loginWithGoogle}>
//         Login con Google
//      </button>
//     </div>
//   );
// }

// export default App;
import Login from "./components/Login/Login";

function App() {
  return <Login />;
}

export default App;
