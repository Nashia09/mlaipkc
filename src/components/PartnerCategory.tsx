import PartnerCard from './PartnerCard'; // Import your PartnerCard component

interface Partner {
  name: string;
  logoUrl: string;
  // Add other properties if necessary
}

interface PartnerCategoryProps {
  category: string;
  partners: Partner[];
}

function PartnerCategory({ category, partners }: PartnerCategoryProps) {
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
