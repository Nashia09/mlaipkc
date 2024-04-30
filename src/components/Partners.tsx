// import React from "react";
import PartnerCarousel from "./PartnersCarousel";

export interface Partner {
  name: string;
  logoUrl: string;
}

export const Partners = () => {
  const partners: Partner[] = [
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
    {
      name: "Nigerian Navy",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/e7/Badge_of_the_Nigerian_Navy.svg",
    },

    {
      name: "KOFI ANNAN INTERNATIONAL PEACEKEEPING TRAINING CENTRE",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/20/KAIPTC_%28Kofi_Annan_International_Peacekeeping_Training_Centre%29_logo.jpg",
    },
    {
      name: "",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOpKutJ8vdNgw08mL9GHUBE2eHT8hwMSMnR_apAq1pfg&s",
    },

    {
      name: "ECOWAS",
      logoUrl: "https://www.kaiptc.org/wp-content/uploads/2017/04/ECOWAS.jpg",
    },
    {
      name: "African Union",
      logoUrl: "https://www.kaiptc.org/wp-content/uploads/2017/04/AFRICAN.jpg",
    },
    {
      name: "United Nations",
      logoUrl: "https://www.kaiptc.org/wp-content/uploads/2017/04/UN-1.jpg",
    },
    {
      name: "POTI",
      logoUrl: "https://www.kaiptc.org/wp-content/uploads/2017/04/POTI.jpg",
    },
    {
      name: "Save the Children",
      logoUrl:
        "https://www.kaiptc.org/wp-content/uploads/2017/04/SAVE-THE-CHILDREN.jpg",
    },
    {
      name: "WANEP",
      logoUrl: "https://www.kaiptc.org/wp-content/uploads/2017/04/WANEP.jpg",
    },
    {
      name: "GIZ",
      logoUrl: "https://www.kaiptc.org/wp-content/uploads/2017/04/GIZ-2.jpg",
    },
    {
      name: "International Association of Peacekeeping Training Centres",
      logoUrl: "https://www.kaiptc.org/wp-content/uploads/2017/04/IAPTC.jpg",
    },
    {
      name: "International Association of Peacekeeping Training Centres",
      logoUrl: "https://www.kaiptc.org/wp-content/uploads/2017/04/IAPTC.jpg",
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
      logoUrl: "https://www.kaiptc.org/wp-content/uploads/2017/01/Sweden.jpg ",
    },
    // Add more partners as needed
  ];
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
        <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">
          Our Partners
        </h2>
      </div>

      <PartnerCarousel partners={partners} />
    </div>
  );
};
