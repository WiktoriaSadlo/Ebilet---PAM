// src/Login.jsx
import { useState } from "react";
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";  // Zaimportuj auth

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  const signInWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
  
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Zalogowano jako:", user.displayName);
    } catch (error) {
      console.error("Błąd logowania przez Google:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Zaloguj</button>
        <button onClick={signInWithGoogle}>Zaloguj się przez Google</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
