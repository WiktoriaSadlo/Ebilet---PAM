import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export default function QRScanner() {
    const [scanResult, setScanResult] = useState("");
  
    return (
      <div className="border rounded-lg p-4 shadow-md mt-4">
        <h2 className="text-xl font-semibold mb-2">🎟️ QR Skanner biletów</h2>
        <QrReader
          constraints={{ facingMode: "environment" }}
          onResult={(result, error) => {
            if (!!result) {
              setScanResult(result?.text);
            }
          }}
          style={{ width: "100%" }}
        />
        <p className="mt-2">
          🔍 Wynik skanowania: <strong>{scanResult || "Brak"}</strong>
        </p>
      </div>
    );
}