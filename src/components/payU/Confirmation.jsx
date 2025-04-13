// src/components/Confirmation.jsx
import { useLocation } from "react-router-dom";

const Confirmation = () => {
    const location = useLocation();
    const total = location.state?.total || 0;

    return (
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold text-green-600">Opłata wykonana ✅</h2>
        <p className="mt-4">Dziękujemy za zakup! 🎉</p>
      <p className="mt-2">Zapłacona kwota: <strong>{total} PLN</strong></p>
      </div>
    );
  };
  
  export default Confirmation;