import React from 'react';
import PartnerCard from './PartnerCard'; // Import your PartnerCard component

function PartnerCategory({ category, partners }) {
  return (
    <div className="partner-category mb-8">
      <h3 className="text-lg font-semibold mb-4">{category}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <PartnerCard key={index} name={partner.name} logoUrl={partner.logoUrl} />
        ))}
      </div>
    </div>
  );
}

export default PartnerCategory;
