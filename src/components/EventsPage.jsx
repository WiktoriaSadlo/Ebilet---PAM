// src/components/EventsPage.jsx
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Card, { CardContent } from "./ui/card";
import Input from "./ui/input";
import Button from "./ui/button";
import CustomDialog from "./ui/dialog";
import QRScanner from "./QRScanner";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [venues, setVenues] = useState({});
  const [selectedCity, setSelectedCity] = useState("Wszystkie");
  const [selectedGenre, setSelectedGenre] = useState("Wszystkie");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showScanner, setShowScanner] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const eventsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const venueSnap = await getDocs(collection(db, "venues"));
      const venueMap = {};
      venueSnap.docs.forEach(doc => {
        venueMap[doc.id] = { id: doc.id, ...doc.data() };
      });

      setVenues(venueMap);
      setEvents(eventsData);
    };

    fetchData();
  }, []);

  const uniqueGenres = ["Wszystkie", ...new Set(events.map(e => e.genre))];
  const uniqueCities = ["Wszystkie", ...new Set(Object.values(venues).map(v => v.city))];

  const filteredEvents = events.filter(event => {
    const venue = venues[event.venueId];
    const matchCity = selectedCity === "Wszystkie" || venue?.city === selectedCity;
    const matchGenre = selectedGenre === "Wszystkie" || event.genre === selectedGenre;
    const matchSearch = event.title.toLowerCase().includes(search.toLowerCase());
    return matchCity && matchGenre && matchSearch;
  });

  const openMap = (event) => {
    const venue = venues[event.venueId];
    const query = encodeURIComponent(`${venue?.name}, ${venue?.city}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🎫 Wydarzenia kulturalne</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <select
          className="p-2 border rounded"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {uniqueCities.map(city => <option key={city}>{city}</option>)}
        </select>

        <select
          className="p-2 border rounded"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {uniqueGenres.map(genre => <option key={genre}>{genre}</option>)}
        </select>

        <Input
          placeholder="Szukaj wydarzenia..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredEvents.length === 0 ? (
        <p>Brak wydarzeń spełniających kryteria.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEvents.map(event => {
  const venue = venues[event.venueId];

  return (
    <Card key={event.id}>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold">{event.title}</h2>
        <p className="text-sm text-gray-600">{venue?.city || "Nieznane"}, {venue?.name || "Brak miejsca"}</p>
        <p className="text-sm">🎵 {event.genre}</p>
        <p className="text-sm">📅 {event.date}</p>
        <p className="text-sm">💵{event.price} PLN</p>
        <div className="flex gap-2 mt-2">
          <Button className="w-full" onClick={() => {
            setSelectedEvent(event);
            setOpen(true);
          }}>
            Kup bilet
          </Button>
          <Button className="w-full bg-green-600" onClick={() => openMap(event)}>
            GPS
          </Button>
        </div>
      </CardContent>
    </Card>
  );
})}
        </div>
      )}

      <CustomDialog open={open} onClose={() => setOpen(false)} selectedEvent={selectedEvent} />

      {/*Przycisk dla skanera*/}
      <div className="mt-8">
        <button
          onClick={() => setShowScanner(prev => !prev)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-md mb-4"
        >
          {showScanner ? '❌ Zamknij skaner' : '📷 Otwórz skaner QR'}
        </button>

        {showScanner && <QRScanner />}
      </div>
    </div>
  );
}
