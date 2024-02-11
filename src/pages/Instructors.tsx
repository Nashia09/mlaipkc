import React from "react";

const Instructors = () => {
  const person = [
    {
      id: 1,
      Name: "Simon Agada",
      rank: "Major",
      img: "https://i.ibb.co/Wpz2jQ9/SO-agada.jpg",
    },
    {
      id: 2,
      Name: "Amba Ogbu",
      rank: "Captain",
      img: "https://i.ibb.co/ZL2C3sN/dy.jpg",
    },
    {
      id: 3,
      Name: "Stella Duru-Uzoma",
      rank: "Major",
      img: "https://ibb.co/8D6BNmk",
    },
    {
      id: 4,
      Name: "Saleh Musa",
      rank: "Captain",
      img: "https://ibb.co/8D6BNmk",
    },
    {
      id: 5,
      Name: "Muhammad Abubakar",
      rank: "Captain",
      img: "https://ibb.co/8D6BNmk",
    },
  ];

  // const data =[
  // "https://ibb.co/8D6BNmk",
  // "https://ibb.co/tYz0KYX",
  // "https://ibb.co/2jv45pB",
  // "https://ibb.co/XYy1pcG",
  // "https://ibb.co/x6WM5NX",
  // "https://ibb.co/Q9Bm4Bh",
  // "https://ibb.co/23jznSg",
  // "https://ibb.co/Mf2FnXq",
  // "https://ibb.co/dpkb1jb",
  // "https://ibb.co/h7Yvk5C",
  // "https://ibb.co/0tnQR7m",
  // "https://ibb.co/HHWVV0K",
  // "https://ibb.co/pWB3RGz",
  // "https://ibb.co/6sPpTGC",
  // "https://ibb.co/sRjnzHr",
  // "https://ibb.co/8bwg7f2",
  // "https://ibb.co/XkmWvqF",
  // "https://ibb.co/r65gcCw",
  // "https://ibb.co/87ggH4V",
  // "https://ibb.co/3ChZ7s7",
  // "https://ibb.co/DG1MPSs",
  // "https://ibb.co/Ln0g5c7",
  // "https://ibb.co/vvdjRb5",
  // "https://ibb.co/cv98gfT",
  // "https://ibb.co/xh5X143",
  // "https://ibb.co/hftCG3D",
  // "https://ibb.co/hdrVHY4",
  // "https://ibb.co/MMr3rTz",
  // "https://ibb.co/gWxdZK5"]
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Awesome Instructors
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Get to learn from top Instructors.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {person.map((p) => (
            <TeamCard
              key={p.id}
              name={p.Name}
              profession={p.rank}
              imageSrc={p.img}
            />
          ))}

         
        </div>
      </div>
    </section>
  );
};
export default Instructors;

interface TeamCardProps {
  imageSrc: string;
  name: string;
  profession: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ imageSrc, name, profession }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 xl:w-1/4">
        <div className="mx-auto mb-10 w-full max-w-[370px]">
          <div className="relative overflow-hidden rounded-lg">
            <img src={imageSrc} alt="" className="w-full" />
            <div className="absolute bottom-5 left-0 w-full text-center">
              <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-dark-2">
                <h3 className="text-base font-semibold text-dark dark:text-white">
                  {name}
                </h3>
                <p className="text-xs text-body-color dark:text-dark-6">
                  {profession}
                </p>
                <div>
                  <span className="absolute bottom-0 left-0">
                    <svg
                      width={61}
                      height={30}
                      viewBox="0 0 61 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx={16}
                        cy={45}
                        r={45}
                        fill="#13C296"
                        fillOpacity="0.11"
                      />
                    </svg>
                  </span>
                  <span className="absolute right-0 top-0">
                    <svg
                      width={20}
                      height={25}
                      viewBox="0 0 20 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="0.706257"
                        cy="24.3533"
                        r="0.646687"
                        transform="rotate(-90 0.706257 24.3533)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="6.39669"
                        cy="24.3533"
                        r="0.646687"
                        transform="rotate(-90 6.39669 24.3533)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.0881"
                        cy="24.3533"
                        r="0.646687"
                        transform="rotate(-90 12.0881 24.3533)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.7785"
                        cy="24.3533"
                        r="0.646687"
                        transform="rotate(-90 17.7785 24.3533)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="0.706257"
                        cy="18.6624"
                        r="0.646687"
                        transform="rotate(-90 0.706257 18.6624)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="6.39669"
                        cy="18.6624"
                        r="0.646687"
                        transform="rotate(-90 6.39669 18.6624)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.0881"
                        cy="18.6624"
                        r="0.646687"
                        transform="rotate(-90 12.0881 18.6624)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.7785"
                        cy="18.6624"
                        r="0.646687"
                        transform="rotate(-90 17.7785 18.6624)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="0.706257"
                        cy="12.9717"
                        r="0.646687"
                        transform="rotate(-90 0.706257 12.9717)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="6.39669"
                        cy="12.9717"
                        r="0.646687"
                        transform="rotate(-90 6.39669 12.9717)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.0881"
                        cy="12.9717"
                        r="0.646687"
                        transform="rotate(-90 12.0881 12.9717)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.7785"
                        cy="12.9717"
                        r="0.646687"
                        transform="rotate(-90 17.7785 12.9717)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="0.706257"
                        cy="7.28077"
                        r="0.646687"
                        transform="rotate(-90 0.706257 7.28077)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="6.39669"
                        cy="7.28077"
                        r="0.646687"
                        transform="rotate(-90 6.39669 7.28077)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.0881"
                        cy="7.28077"
                        r="0.646687"
                        transform="rotate(-90 12.0881 7.28077)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.7785"
                        cy="7.28077"
                        r="0.646687"
                        transform="rotate(-90 17.7785 7.28077)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="0.706257"
                        cy="1.58989"
                        r="0.646687"
                        transform="rotate(-90 0.706257 1.58989)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="6.39669"
                        cy="1.58989"
                        r="0.646687"
                        transform="rotate(-90 6.39669 1.58989)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.0881"
                        cy="1.58989"
                        r="0.646687"
                        transform="rotate(-90 12.0881 1.58989)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.7785"
                        cy="1.58989"
                        r="0.646687"
                        transform="rotate(-90 17.7785 1.58989)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
