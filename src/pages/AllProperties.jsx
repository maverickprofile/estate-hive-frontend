import React, { useState, useMemo } from 'react';
import properties from '../data/properties';

const categories = ["All", "For Sale", "For Rent", "Luxury Rentals", "EH Signature™"];

const parsePrice = (str) => {
  const nums = [];
  let lastUnit = 'CR';
  const cleaned = str.toUpperCase().replace(/-/g, ' ');
  const regex = /(\d+(?:\.\d+)?)(?:\s*)(CR|L)?/g;
  let match;
  while ((match = regex.exec(cleaned)) !== null) {
    let value = parseFloat(match[1]);
    const unit = match[2] || lastUnit;
    lastUnit = unit;
    if (unit === 'L') value /= 100;
    nums.push(value);
  }
  if (!nums.length) return { min: 0, max: 0 };
  return { min: Math.min(...nums), max: Math.max(...nums) };
};

export default function AllProperties() {
  const enriched = useMemo(
    () =>
      properties.map((p) => {
        const { min, max } = parsePrice(p.price);
        return { ...p, priceMin: min, priceMax: max };
      }),
    []
  );

  const locations = useMemo(
    () => Array.from(new Set(enriched.map((p) => p.location))),
    [enriched]
  );
  const minPriceGlobal = Math.min(...enriched.map((p) => p.priceMin));
  const maxPriceGlobal = Math.max(...enriched.map((p) => p.priceMax));

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState('All');
  const [sort, setSort] = useState('default');
  const [minPrice, setMinPrice] = useState(minPriceGlobal);
  const [maxPrice, setMaxPrice] = useState(maxPriceGlobal);

  const filtered = useMemo(
    () =>
      enriched.filter((p) => {
        const term = search.toLowerCase();
        const matchesSearch =
          p.name.toLowerCase().includes(term) ||
          p.location.toLowerCase().includes(term);
        const matchesCategory = category === 'All' || p.category === category;
        const matchesLocation = location === 'All' || p.location === location;
        const matchesPrice =
          p.priceMin >= minPrice && p.priceMin <= maxPrice;
        return (
          matchesSearch &&
          matchesCategory &&
          matchesLocation &&
          matchesPrice
        );
      }),
    [enriched, search, category, location, minPrice, maxPrice]
  );

  const sorted = useMemo(() => {
    const arr = [...filtered];
    if (sort === 'asc') arr.sort((a, b) => a.priceMin - b.priceMin);
    else if (sort === 'desc') arr.sort((a, b) => b.priceMin - a.priceMin);
    return arr;
  }, [filtered, sort]);

  const handleMinPriceChange = (e) => {
    const value = parseFloat(e.target.value);
    setMinPrice(value);
    if (value > maxPrice) setMaxPrice(value);
  };

  const handleMaxPriceChange = (e) => {
    const value = parseFloat(e.target.value);
    setMaxPrice(value);
    if (value < minPrice) setMinPrice(value);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Browse Properties</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4 space-y-6">
          <div>
            <input
              type="text"
              placeholder="Search by name or location"
              className="border p-2 w-full rounded"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Category</label>
            <select
              className="border p-2 w-full rounded"
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
          <div>
            <label className="block text-sm font-semibold mb-1">Location</label>
            <select
              className="border p-2 w-full rounded"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="All">All</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Price Range (Cr)</label>
            <input
              type="range"
              min={minPriceGlobal}
              max={maxPriceGlobal}
              step="0.01"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="w-full"
            />
            <input
              type="range"
              min={minPriceGlobal}
              max={maxPriceGlobal}
              step="0.01"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="w-full mt-2"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{minPrice.toFixed(2)}</span>
              <span>{maxPrice.toFixed(2)}</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Sort By</label>
            <select
              className="border p-2 w-full rounded"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Most Demand</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </aside>
        <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1">{p.name}</h2>
                <p className="text-sm text-gray-600 mb-1">{p.type}</p>
                <p className="text-gray-500 mb-1">{p.location}</p>
                <p className="text-indigo-600 font-bold mb-1">{p.price}</p>
                {p.phone && (
                  <p className="text-sm text-gray-500">Phone: {p.phone}</p>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

