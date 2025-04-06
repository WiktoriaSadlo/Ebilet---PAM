import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from './ui/button';

function TicketPurchasePage() {
  const location = useLocation();
  const { event } = location.state; 

  const [ticketCount, setTicketCount] = useState(1);
  const [inCart, setInCart] = useState(false);

  const handleIncrement = () => {
    setTicketCount(ticketCount + 1);
  };

  const handleDecrement = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  const handleAddToCart = () => {
    setInCart(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{event.name}</h1>
      <p className="text-lg text-gray-600 mb-4">{event.description}</p>
      
      {event.type === 'club' ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Miejsca stojące</h2>
          <div className="flex justify-center items-center mb-4">
            <button onClick={handleDecrement} className="px-4 py-2 bg-gray-300 text-black rounded">
              -
            </button>
            <span className="mx-4 text-2xl">{ticketCount}</span>
            <button onClick={handleIncrement} className="px-4 py-2 bg-gray-300 text-black rounded">
              +
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">Mapa dostępnych miejsc</h2>
          <div className="w-full h-60 bg-gray-200 rounded-md mb-4">
            {/* Mapa dostępnych miejsc dla Tauron Areny, PGE Narodowego itp. */}
            <div className="relative">
              <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-green-500 opacity-50">Dostępne</div>
              <div className="absolute top-0 left-1/4 w-1/4 h-1/4 bg-red-500 opacity-50">Zajęte</div>
              <p className="text-center text-gray-600">Mapa miejsca dla {event.name}</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="text-center">
        <Button onClick={handleAddToCart}>
          {inCart ? 'Dodano do koszyka' : 'Dodaj do koszyka'}
        </Button>
      </div>
    </div>
  );
}

export default TicketPurchasePage;
