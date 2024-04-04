import React from "react";
import Banner from "../components/Banner";
import gm from "../assets/general-martin-luther3.jpg";
import amb from "../assets/ambassador-ibrahim-gambari3.jpg";
import eth from "../assets/Maj-Ethan-3.jpeg";
import h from "../assets/Hajia-Ahmed-Jaji-4.jpeg";
import ml from "../assets/ml.jpg";

const TeamMember = ({ name, imageUrl }) => (
  <div className="flex flex-col items-center">
    <img src={imageUrl} alt={name} className="rounded-full w-32 h-32 mb-4" />
    <h3 className="text-lg font-semibold">{name}</h3>
  </div>
);

const Abt = () => {
  const teamMembers = [
    {
      name: "ML Agwai Gen(rtd)",
      imageUrl: gm,
      position: "Chairman",
    },
    {
      name: "OT Ethan Maj Gen(rtd)",
      imageUrl: eth,
      position: "Member",
    },
    {
      name: "Mrs. Halima Ahmed ECOWAS",
      imageUrl: h,
      position: "Member",
    },
    {
      name: "Ambassador Ibrahim Gambari COS To Presidency",
      imageUrl: amb,
      position: "Member",
    },
    // Add more team members as needed
  ];
  return (
    <>
      <Banner title={"About Us"} summary={""} />
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-stone-200">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              About Us
            </h1>
            <p className="font-bold text-base leading-6 text-gray-600 ">
              WELCOME TO MLAILPKC The Centre evloved from the commitment of the
              Nigerian Armed force towards keeping peace around the world.
            </p>
          </div>

          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full rounded-md shadow-lg"
              src={ml}
              alt="A group of People"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-2 pt-12">
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-1 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-1 rounded-md">
              <div className="p-4 pb-6  items-center">
                <img
                  className="w-full h-full md:block hidden rounded-md shadow-lg"
                  src="https://web.archive.org/web/20220520045800im_/https://mlailpkc.org.ng/static/images/about/vission.JPG"
                  alt="A group of People"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-5/12  justify-start text-left">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Our History
            </h1>
            <p className="font-bold text-base leading-6 text-gray-600 ">
              What began as Armed forces of Nigeria (AFN) participation in Peace
              Support Operation (PSO) dates back to 1960 when Nigerian troops
              were first deployed to restore peace and security in the Repulic
              of Congo. Outstanding success of AFN was also recorded 1990 - 2000
              (ECOMOG). At the time the Centre in September 2004 became a wing
              under Nigerian Army School of Infantry (NASI), which then became
              autonomous and name Nigerian Army Peackeeping Centre on January of
              2009, which was in a need to solving the growing requirements to
              ensure the Peacekeepers are more humane and gives priority to
              protection of the rights of citizens. The dynamic nature of
              Contemporary PSO revealed some dauting challenges to the
              successful participation of Troop Contributing Nations (CTN). In
              the case of Nigeria, a major challenge identified was Leadership
              in Peacekeeping. Thus, Leadership training was introduced to the
              Centre and was renamed Martin Luther Agwai International
              Leadership and Peacekeeping Centre (MLAILPKC) on 29 Jul 2017.
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12  text-left">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Our Vision
            </h1>
            <p className="font-bold text-base leading-6 text-gray-600 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-1 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-1 rounded-md">
              <div className="p-4 pb-6  items-center">
                <img
                  className="w-full h-full md:block hidden rounded-md shadow-lg"
                  src="https://web.archive.org/web/20220520045800im_/https://mlailpkc.org.ng/static/images/about/vission.JPG"
                  alt="A group of People"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between  text-left gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Our Mission
            </h1>
            <p className="font-bold text-base leading-6 text-gray-600 ">
              The Mission of MLAILPKC is to deliver realistic and qualitative
              training packages on Peace Support Operations to potential United
              Nations and regional peacekeepers to prepare them for the complex
              and multidimensional challenges of modern Peace Support
              Operations.
            </p>
          </div>
        </div>
        <div className="container mx-auto py-12">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Board Of Trustees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Abt;
