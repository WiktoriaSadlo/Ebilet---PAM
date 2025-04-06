import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { auth } from "./firebase"; // Import auth z firebase
import { signOut, onAuthStateChanged } from "firebase/auth";
import Button from "./components/ui/button";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home"; 
import EventsPage from "./components/EventsPage";
import TicketPurchasePage from './components/TicketPurchasePage';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => signOut(auth);

  return (
    <Router>
      <div className="p-4">
        <nav className="flex justify-between items-center mb-4">
          <Link to="/">🎵 eBilet</Link>
          {user ? (
            <div>
              <Link to="/tickets" className="mr-2">Moje bilety</Link>
              <Button onClick={handleLogout}>Wyloguj</Button>
            </div>
          ) : (
            <div>
              <Link to="/login" className="mr-2">Zaloguj</Link>
              <Link to="/register">Rejestracja</Link>
            </div>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/ticket/:eventId" element={<TicketPurchasePage />} />
          <Route path="/tickets" element={user ? <div>Twoje bilety</div> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
