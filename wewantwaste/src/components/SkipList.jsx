import React from 'react';
import SkipCard from './SkipCard';

const SkipList = ({ skips, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
      {skips.map(skip => (
        <SkipCard key={skip.id} skip={skip} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default SkipList;
