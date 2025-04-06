import React from 'react';
import { Link } from 'react-router-dom';
import Button from "./ui/button";

function Home() {
  return (
    <div className="container mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Witaj w eBilet!</h1>
        <p className="text-lg text-gray-600">Kupuj i zarządzaj swoimi biletami na koncerty, wydarzenia i inne!</p>
      </header>

      <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Dlaczego warto wybrać eBilet?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Szybkie zakupy</h3>
            <p>Łatwy proces zakupu biletów na ulubione wydarzenia. Wybierz i zapłać w kilka minut!</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Bezpieczna płatność</h3>
            <p>Gwarantujemy bezpieczeństwo Twoich transakcji online.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Bilety na każdy event</h3>
            <p>Znajdź bilety na koncerty, festiwale, wystawy i inne wydarzenia kulturalne.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">A może chcesz po prostu zobaczyć co gramy?</h2>
        <Link to="/events">
          <Button>Przeglądaj wydarzenia</Button>
        </Link>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Gotowy na zakupy?</h2>
        <p className="text-lg text-gray-600 mb-4">Zaloguj się, aby rozpocząć zakupy lub zarejestruj się, jeśli nie masz jeszcze konta.</p>
        <div className="flex justify-center gap-4">
          <Link to="/login">
            <Button>Zaloguj się</Button>
          </Link>
          <Link to="/register">
            <Button>Załóż konto</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
