import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { auth } from "./firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home"; 
import EventsPage from "./components/EventsPage";
import Navbar from './components/Navbar';
import ShoppingCart from './components/ShoppingCart';
import Confirmation from './components/payU/Confirmation';
import PayUSimulator from './components/payU/PayUSimulator';

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
      <div>
      <Navbar user={user} onLogout={handleLogout} />
      
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/tickets" element={user ? <div>Twoje bilety</div> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<ShoppingCart/>}/>
          <Route path="/payu" element={<PayUSimulator/>}/>
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
