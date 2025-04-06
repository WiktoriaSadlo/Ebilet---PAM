import { useState } from "react";
import events from "../data/events";
import Card, { CardContent } from "./ui/card";
import Input from "./ui/input";
import Button from "./ui/button";
import { Link } from 'react-router-dom';

const uniqueGenres = ["Wszystkie", ...new Set(events.map(e => e.genre))];
const uniqueCities = ["Wszystkie", ...new Set(events.map(e => e.city))];

export default function EventsPage() {
  const [selectedCity, setSelectedCity] = useState("Wszystkie");
  const [selectedGenre, setSelectedGenre] = useState("Wszystkie");
  const [search, setSearch] = useState("");

  const filteredEvents = events.filter(event => {
    const matchCity = selectedCity === "Wszystkie" || event.city === selectedCity;
    const matchGenre = selectedGenre === "Wszystkie" || event.genre === selectedGenre;
    const matchSearch = event.title.toLowerCase().includes(search.toLowerCase());
    return matchCity && matchGenre && matchSearch;
  });

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
          {filteredEvents.map(event => (
            <Card key={event.id}>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold">{event.title}</h2>
                <p className="text-sm text-gray-600">{event.city}, {event.venue}</p>
                <p className="text-sm">🎵 {event.genre}</p>
                <p className="text-sm">📅 {event.date}</p>
                <Link to={{ pathname: `/ticket/${event.id}`, state: { event } }}>
                    <Button className="mt-2 w-full">Kup bilet</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
