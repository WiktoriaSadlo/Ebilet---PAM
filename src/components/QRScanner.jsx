import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function QRScannerHtml5() {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      (decodedText) => {
        alert("Wynik skanowania: " + decodedText);
        scanner.clear(); // остановить после успешного скана
      },
      (error) => {
        console.log("Błąd skanowania:", error);
      }
    );

    return () => {
      scanner.clear().catch((error) => console.error("Błąd czyszczenia:", error));
    };
  }, []);

  return (
    <div className="border rounded-lg p-4 shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-2">🎟️ QR Skanner</h2>
      <div id="reader" style={{ width: "100%" }} />
    </div>
  );
}