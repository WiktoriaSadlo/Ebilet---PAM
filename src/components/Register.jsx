// src/Register.jsx
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";  // Zaimportuj auth z firebase.js

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Funkcja obsługująca rejestrację użytkownika
  const handleRegister = async (e) => {
    e.preventDefault();  // Zapobiegamy domyślnej akcji formularza
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Jeśli rejestracja się powiedzie, można przekierować użytkownika
      // na stronę logowania lub główną stronę aplikacji
    } catch (err) {
      // Obsługuje błędy, np. jeśli e-mail jest już zajęty
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Zarejestruj się</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Zarejestruj</button>
      </form>

      <div className="mt-4 text-center">
        <p>Masz już konto? <a href="/login" className="text-blue-500">Zaloguj się</a></p>
      </div>
    </div>
  );
}

export default Register;
