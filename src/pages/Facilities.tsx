
import Accommodation from "../components/Accom";
import Banner from "../components/Banner";
import MedicalCenter from "../components/Medical";
import SportCenter from "../components/Sport";

export const Facilities = () => {
  return (
    <div>
      <Banner title={"Facilities"} summary={"Our modern equipments"} />
   
      <MedicalCenter />
      <SportCenter />
      <Accommodation />
    </div>
  );
};
