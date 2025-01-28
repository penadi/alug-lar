// Login.js
import { auth } from "./firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirecionar para a home
    } catch (error) {
      alert("Erro: " + error.message);
    }
  };

  return (
    <div>
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="Senha" />
      <button onClick={() => handleLogin(email, password)}>Entrar</button>
    </div>
  );
}