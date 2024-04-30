import Banner from "../components/Banner";
import PartnerCategory from "../components/PartnerCategory";

export const Partners = () => {
  return (
    <div>
      <Banner title={"Our Partners"} summary={"Partners"} />

      <div className="partners-page">
        <div className="container mx-auto py-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            Partner Categories
          </h2>

          <div className="">
            <PartnerCategory
              category="Countries"
              partners={[
                {
                  name: "Germany",
                  logoUrl:
                    "https://www.kaiptc.org/wp-content/uploads/2018/08/germany-2888541_960_720-e1535534203262.png",
                },
                {
                  name: "USA",
                  logoUrl:
                    "https://www.kaiptc.org/wp-content/uploads/2018/08/plausible-e1535535441235.png",
                },
                {
                  name: "Japan",
                  logoUrl:
                    "https://www.kaiptc.org/wp-content/uploads/2018/06/japan-162328_960_720-e1528198174646.png",
                },

                {
                  name: "Sweden",
                  logoUrl:
                    "https://www.kaiptc.org/wp-content/uploads/2017/01/Sweden.jpg ",
                },
                {
                  name: "Germany",
                  logoUrl:
                    "https://www.kaiptc.org/wp-content/uploads/2018/08/germany-2888541_960_720-e1535534203262.png",
                },
                {
                  name: "USA",
                  logoUrl:
                    "https://www.kaiptc.org/wp-content/uploads/2018/08/plausible-e1535535441235.png",
                },
                {
                  name: "Japan",
                  logoUrl:
                    "https://www.kaiptc.org/wp-content/uploads/2018/06/japan-162328_960_720-e1528198174646.png",
                },

                {
                  name: "Sweden",
                  logoUrl:
                    "https://www.kaiptc.org/wp-content/uploads/2017/01/Sweden.jpg ",
                },

                // Add more partners as needed
              ]}
            />

            <PartnerCategory
              category="Government Institutions"
              partners={[
                {
                  name: "Nigerian Defense Academy(NDA)",
                  logoUrl:
                    "https://upload.wikimedia.org/wikipedia/en/4/4b/Nigerian_Defence_Academy_logo.png",
                },
                {
                  name: "Nigerian Army",
                  logoUrl:
                    "https://upload.wikimedia.org/wikipedia/commons/4/45/Nigerian_Army_Logo_With_Correct_Inscriptions.png",
                },
                
                {
                  name: "Nigerian Airforce",
                  logoUrl:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Nigerian_Air_Force_emblem.svg/1200px-Nigerian_Air_Force_emblem.svg.png",
                },
                { name: "Nigerian Navy", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Badge_of_the_Nigerian_Navy.svg" },

                {
                  name: "KOFI ANNAN INTERNATIONAL PEACEKEEPING TRAINING CENTRE",
                  logoUrl:
                    "https://upload.wikimedia.org/wikipedia/commons/2/20/KAIPTC_%28Kofi_Annan_International_Peacekeeping_Training_Centre%29_logo.jpg",
                },
                {
                  name: "Nordic Defence Cooperation(NORDEFCO)",
                  logoUrl:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOpKutJ8vdNgw08mL9GHUBE2eHT8hwMSMnR_apAq1pfg&s",
                },
                // Add more partners as needed
              ]}
            />

            <PartnerCategory
              category="Institutional Partners"
              partners={[
                {
                  name: "ECOWAS",
                  logoUrl:
                    "https://www.kaiptc.org/wp-content/uploads/2017/04/ECOWAS.jpg",
                },
                {
                  name: "African Union",
                  logoUrl:
                    "https://www.kaiptc.org/wp-content/uploads/2017/04/AFRICAN.jpg",
                },
                {
                  name: "United Nations",
                  logoUrl:
                    "https://www.kaiptc.org/wp-content/uploads/2017/04/UN-1.jpg",
                },
                {
                  name: "POTI",
                  logoUrl:
                    "https://www.kaiptc.org/wp-content/uploads/2017/04/POTI.jpg",
                },
                {
                  name: "Save the Children",
                  logoUrl:
                    "https://www.kaiptc.org/wp-content/uploads/2017/04/SAVE-THE-CHILDREN.jpg",
                },
                {
                  name: "WANEP",
                  logoUrl:
                    "https://www.kaiptc.org/wp-content/uploads/2017/04/WANEP.jpg",
                },
                {
                  name: "GIZ",
                  logoUrl:
                    "https://www.kaiptc.org/wp-content/uploads/2017/04/GIZ-2.jpg",
                },
                {
                  name: "International Association of Peacekeeping Training Centres",
                  logoUrl:
                    "https://www.kaiptc.org/wp-content/uploads/2017/04/IAPTC.jpg",
                },
                {
                  name: "International Association of Peacekeeping Training Centres",
                  logoUrl:
                    "https://www.kaiptc.org/wp-content/uploads/2017/04/IAPTC.jpg",
                },

                // Add more partners as needed
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
