import React, { useEffect, useState } from 'react';
import SkipList from '../components/SkipList';

const SkipSelectionPage = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/skips.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load skips');
        return res.json();
      })
      .then((data) => {
        setSkips(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleSelect = (id) => {
    alert(`You selected skip ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-12 drop-shadow">
          Choose Your Skip Size
        </h1>

        {loading && <p className="text-center text-gray-500">Loading skips...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && <SkipList skips={skips} onSelect={handleSelect} />}
      </div>
    </div>
  );
};

export default SkipSelectionPage;