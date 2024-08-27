import { Carousel } from "@mantine/carousel";
import React from "react";
import { FaBullhorn } from "react-icons/fa";
import { jobsSlider } from "../../data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategory = () => {
  return (
    <section className="mt-20 pb-5">
      <h2 className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        Browse <span className="text-bright-sun-400">Jobs</span> Category
      </h2>

      <p className="text-lg mx-auto text-mine-shaft-300 text-center w-1/2">
      Explore diverse job opportunities tailored to your skills. Start your
      career journey today.
      </p>

      <Carousel slideSize="22%" slideGap="sm" loop nextControlIcon={<IconArrowRight className="h-8 w-8" />}
      previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
      className="focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:!opacity-75 [&_button]:!opacity-0 hover:[&_button]:!opacity-100"
      >
        {jobsSlider.map((job, index) => (
          <Carousel.Slide>
            {" "}
            <div
              key={index + job.title}
              className="flex flex-col items-center w-64 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-bright-sun-300"
            >
              <div className="p-2 bg-bright-sun-300 rounded-full">
                {job.icon}
              </div>
              <h4 className="text-mine-shaft-100 text-xl font-semibold">
                {job.title}
              </h4>
              <p className="text-sm text-mine-shaft-300 text-center">
                {job.description}
              </p>
              <p className="text-lg text-bright-sun-300">
                {job.subDescription}
              </p>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
};

export default JobCategory;
