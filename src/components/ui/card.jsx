import React from 'react';

export default function Card({ children }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mb-4">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
    return (
      <div className="text-gray-700">
        {children}
      </div>
    );
  }