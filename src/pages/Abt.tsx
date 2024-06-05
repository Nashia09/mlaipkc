import gm from "../assets/general-martin-luther3.jpg";
import amb from "../assets/ambassador-ibrahim-gambari3.jpg";
import eth from "../assets/Maj-Ethan-3.jpeg";
import h from "../assets/Hajia-Ahmed-Jaji-4.jpeg";
import ml from "../assets/ml.jpg";
import sol3 from "../assets/hero/mlmil.jpeg";
import React from "react";
import Banner from "../components/Banner";

const AboutUs: React.FC = () => {
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
    
      <Banner title="About Us" summary="About Us" />
      <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
            <p className="mt-4 text-lg text-gray-600">
              WELCOME TO MLAILPKC The Centre is commitmened towards the <br />
              training of Armed forces and civilians alike towards keeping peace
              around the world.
            </p>
          </div>
          <div className="mt-10">
            <div className=" p-6">
              <h2 className="text-3xl font-bold text-gray-900">History</h2>
              <img
                className="mt-4 w-full h-48 object-cover rounded-lg"
                src={sol3}
                alt="History"
              />
              <p className="mt-4 text-gray-600 font-semibold text-left ">
                What began as Armed forces of Nigeria (AFN) participation in
                Peace Support Operation (PSO) dates back to 1960 when Nigerian
                troops were first deployed to restore peace and security in the
                Republic of Congo. Outstanding success of AFN was also recorded
                1990 - 2000 (ECOMOG).
                <br /><br/> At the time the Centre in September 2004 became a wing
                under Nigerian Army School of Infantry (NASI), which then became
                autonomous and named Nigerian Army Peacekeeping Centre on
                January of 2009, which was in a need to solve the growing
                requirements to ensure the Peacekeepers are more humane and give
                priority to protection of the rights of citizens.<br/> <br/> The dynamic
                nature of Contemporary PSO revealed some daunting challenges to
                the successful participation of Troop Contributing Nations
                (CTN). In the case of Nigeria, a major challenge identified was
                Leadership in Peacekeeping. Thus, Leadership training was
                introduced to the Centre and was renamed Martin Luther Agwai
                International Leadership and Peacekeeping Centre (MLAILPKC) on
                29 Jul 2017.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-3xl font-bold text-gray-900">Mission</h2>
                <img
                  className="mt-4 w-full h-48 object-cover rounded-lg"
                  src={sol3}
                  alt="Mission"
                />
                <p className="mt-4 text-gray-600">
                  To deliver realistic training to potential leaders and
                  peacekeepers for the multi-dimentional challenges of
                  contemporary peace support operations.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
                <img
                  className="mt-4 w-full h-48 object-cover rounded-lg"
                  src={ml}
                  alt="Mission"
                />
                <p className="mt-4 text-gray-600">
                  MLAILPKC seeks to become the principal international Centre
                  for learning and research on all matters related to leadership
                  and tactical/operational level peace support operations,
                  towards enhancing international peace and security.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Board of Trustees
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Sample Trustees */}

              {teamMembers.map((m) => (

              <div className="bg-white rounded-lg shadow p-6 text-center">
                <img
                  className="w-32 h-32 mx-auto rounded-full"
                  src={m.imageUrl}
                  alt="Trustee 1"
                />
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {m.name}
                </h3>
                <p className="mt-2 text-gray-600">{m.position}</p>
              </div>
              ))}
             
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
