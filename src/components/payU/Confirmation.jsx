// src/components/Confirmation.jsx
import { useLocation } from "react-router-dom";
import QRScanner from "../QRScanner";

const Confirmation = () => {
    const location = useLocation();
    const total = location.state?.total || 0;

    return (
      <div className="text-center p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-green-600">Opłata wykonana ✅</h2>
      <p className="mt-4">Dziękujemy za zakup! 🎉</p>
      <p className="mt-2 mb-6">Zapłacona kwota: <strong>{total} PLN</strong></p>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Zeskanuj kod QR, aby aktywować bilet:</h3>
        <QRScanner />
      </div>
    </div>
    );
  };
  
  export default Confirmation;