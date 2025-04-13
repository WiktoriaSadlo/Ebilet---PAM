import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "../../style/PayU.css"

const PayUSimulator = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clearCart } = useCart();
  
  const total = location.state?.total || 0;
  const [step, setStep] = useState(1);

  useEffect(() => {
    const step1Timer = setTimeout(() => setStep(2), 2000);
    const finalStepTimer = setTimeout(() => {
      clearCart();
      navigate("/confirmation", { state: { total } });
    }, 6000);

    return () => {
      clearTimeout(step1Timer);
      clearTimeout(finalStepTimer);
    };
  }, [navigate, total]);

  return (
    <div className="payu-container">
      {step === 1 && (
        <div className="payu-step fade-in">
          <h2 className="payu-title">Przekierowanie do PayU...</h2>
          <p>Kwota do zapłaty: <strong>{total} PLN</strong></p>
          <p>Proszę poczekać, trwa przekierowanie...</p>
        </div>
      )}

      {step === 2 && (
        <div className="payu-step fade-in">
          <h2 className="payu-title">PayU - Formularz płatności</h2>
          <div className="payu-form">
            <div className="payu-field">
              <label>Numer karty:</label>
              <input type="text" value="**** **** **** 4242" disabled />
            </div>
            <div className="payu-field">
              <label>Data ważności:</label>
              <input type="text" value="12/28" disabled />
            </div>
            <div className="payu-field">
              <label>Kod CVV:</label>
              <input type="password" value="***" disabled />
            </div>
            <div className="payu-field">
              <label>Kwota:</label>
              <input type="text" value={`${total} PLN`} disabled />
            </div>
            <button className="payu-button" disabled>
              Przetwarzanie płatności...
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayUSimulator;
