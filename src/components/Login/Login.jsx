import { useState } from "react";
import { auth } from "../../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import "./login.css";

const provider = new GoogleAuthProvider();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuario logueado:", userCredential.user); 
      alert("Login exitoso");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuario registrado:", userCredential.user);
      alert("Usuario registrado");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result =await signInWithPopup(auth, provider);
      console.log("Usuario Google:", result.user);
      alert("Login con Google exitoso");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h1>🔥 Firebase Login</h1>
        <p>Accede usando tu cuenta</p>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn primary" type="submit">
          Iniciar sesión
        </button>

        <button
          className="btn secondary"
          type="button"
          onClick={handleRegister}
        >
          Registrarse
        </button>

        <div className="divider">o</div>

        <button
          className="btn google"
          type="button"
          onClick={handleGoogleLogin}
        >
          Continuar con Google
        </button>
      </form>
    </div>
  );
}
