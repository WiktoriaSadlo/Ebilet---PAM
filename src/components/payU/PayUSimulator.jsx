// src/components/payU/PayUSimulator.jsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const PayUSimulator = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clearCart } = useCart();

  const total = location.state?.total || 0;

  useEffect(() => {
    // Symulacja PayU
    const timer = setTimeout(() => {
      clearCart();
      navigate("/confirmation", { state: { total } });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, total]);

  return (
    <div className="text-center p-6">
      <h2 className="text-xl font-semibold">Przekierowanie na PayU...</h2>
      <p className="mt-2">Kwota do zapłaty: <strong>{total} PLN</strong></p>
      <p className="mt-2">Proszę poczekać, trwa przetwarzanie płatności...</p>
    </div>
  );
};

export default PayUSimulator;