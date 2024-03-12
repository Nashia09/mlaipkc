import React from "react";

export const BlogDetails = () => {
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src="https://peacekeeping.un.org/sites/default/files/styles/1200x500/public/ghana_ministerial.jpeg?itok=vm0gwP41"
          alt=""
          className="w-full h-60 sm:h-96 dark:bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
          <div className="space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block text-2xl font-semibold sm:text-3xl"
            >
              BRITISH MILITARY ADVISORY TRAINING TEAM (BMATT) VISIT TO CENTRE
            </a>
            <p className="text-xs dark:text-gray-400">
              By {"   "}
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline font-bold"
              >
                MLAPIPKC
              </a>
            </p>
          </div>
          <div className="dark:text-gray-100 text-start">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio at
              quam blanditiis eius, accusamus dolorem molestias rem ad
              reprehenderit consequatur voluptatem accusantium mollitia eligendi
              doloremque optio illum, odit, voluptates iste. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Asperiores aspernatur
              magni quidem aliquid perferendis blanditiis reprehenderit
              laboriosam! Omnis vel debitis, officia fugit accusantium rerum
              earum, dolor incidunt inventore est commodi?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
              placeat doloribus et, tenetur repellat labore harum ad aut nam
              accusamus deserunt illo fuga ducimus, voluptatibus maiores qui
              nobis aliquam magnam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
