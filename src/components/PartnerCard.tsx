interface cardprops{
  name: string;
  logoUrl: string;
}

function PartnerCard({ name, logoUrl }: cardprops) {
  return (
    <div className="partner-card bg-white rounded-lg shadow-md p-6 transition duration-300 transform hover:scale-105">
      <img
        src={logoUrl}
        alt={name}
        className="w-full  mx-auto mb-6 object-contain"
      />
      <h4 className="text-lg font-semibold text-center">{name}</h4>
    </div>
  );
}

export default PartnerCard;
