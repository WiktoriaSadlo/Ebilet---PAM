import React from 'react';
import { useCart } from '../context/CartContext';
import Button from './ui/button';

export default function CartPage() {
  const { cartItems, clearCart } = useCart();

  const handleFakePayment = () => {
    alert('Płatność zakończona sukcesem!');
    clearCart();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Twój koszyk</h1>
      {cartItems.length === 0 ? (
        <p>Koszyk jest pusty.</p>
      ) : (
        <div>
          <ul className="mb-4">
            {cartItems.map((item, index) => (
              <li key={index} className="border-b py-2">
                🎫 {item.title} - {item.city}, {item.date}
              </li>
            ))}
          </ul>
          <Button onClick={handleFakePayment}>Symuluj płatność</Button>
        </div>
      )}
    </div>
  );
}
