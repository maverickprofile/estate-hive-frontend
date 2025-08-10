import React, { useState } from 'react';
import properties from '../data/properties';

const categories = ["All", "For Sale", "For Rent", "Luxury Rentals", "EH Signature™"];

export default function AllProperties() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = properties.filter((p) => {
    const matchesCategory = category === 'All' || p.category === category;
    const term = search.toLowerCase();
    const matchesTerm =
      p.name.toLowerCase().includes(term) ||
      p.location.toLowerCase().includes(term);
    return matchesCategory && matchesTerm;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Browse Properties</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by name or location"
          className="border p-2 flex-1 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, idx) => (
          <div key={idx} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-1">{p.name}</h2>
            <p className="text-sm text-gray-600 mb-1">{p.type}</p>
            <p className="text-gray-500 mb-1">{p.location}</p>
            <p className="text-indigo-600 font-bold mb-1">{p.price}</p>
            {p.phone && <p className="text-sm text-gray-500">Phone: {p.phone}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
