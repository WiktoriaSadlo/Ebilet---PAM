import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card, { CardContent } from "./ui/card";
import Button from "./ui/button";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCart = () => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        console.log("Stan koszyka po załadowaniu z localStorage:", storedCart);
        setCartItems(storedCart);
      };

    loadCart();
    
    const handleStorageChange = () => {
        loadCart();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const handlePayment = () => {
    const total = cartItems.reduce((sum, item) => sum + Number(item.price || 0), 0);
    const audio = new Audio("/sounds/mixkit-select-click-1109.wav");
    audio.play();
    navigate("/payu", { state: { total } });
  };

  const total = cartItems.reduce((sum, item) => sum + Number(item.price || 0), 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🛒 Twój koszyk</h1>

      {cartItems.length === 0 ? (
        <p>Koszyk jest pusty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cartItems.map(event => (
              <Card key={event.id}>
                <CardContent className="p-4">
                  <h2 className="text-lg font-semibold">{event.title}</h2>
                  <p className="text-sm text-gray-600">{event.city}, {event.venue}</p>
                  <p className="text-sm">🎵 {event.genre}</p>
                  <p className="text-sm">📅 {event.date}</p>
                  <p className="text-sm font-semibold">💵 {event.price} PLN</p>
                  <Button className="mt-2 bg-red-500" onClick={() => removeFromCart(event.id)}>
                    Usuń z koszyka
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-6 text-lg font-semibold">Razem do zapłaty: {total} PLN</p>

          <Button className="mt-6 bg-blue-600" onClick={clearCart}>
            Wyczyść koszyk
          </Button>
          <Button className="mt-6 bg-blue-600" onClick={handlePayment}>
            Dokonaj płatności
          </Button>
        </>
      )}
    </div>
  );
}
