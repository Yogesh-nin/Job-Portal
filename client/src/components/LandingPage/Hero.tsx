import React from "react";
import hero from "../../assets/hero.svg";
import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import AvatarImage from "../../assets/avatar.png";
import '@mantine/core/styles/Avatar.css';
import googleImage from '../../assets/google.png';

const Hero = () => {
  return (
    <section className="flex items-center px-16">
      <div className="flex flex-col w-[45%] gap-3">
        <h1 className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
          Find Your <span>dream job</span> with us
        </h1>
        <p className="text-lg text-mine-shaft-200 ">
          Good life begins with a good company. Start explore thousands of jobs
          in one place
        </p>
        <div className="flex gap-3 mt-5">
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100 [&_input]:!bg-mine-shaft-900"
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
          />
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100 [&_input]:!bg-mine-shaft-900"
            variant="unstyled"
            label="Job Type"
            placeholder="Full Time"
          />

          <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer">
            <IconSearch className="h-[85%] w-[85%]" />
          </div>
        </div>
      </div>
      <div className="w-[55%] flex items-center justify-center">
        <div className="w-[30rem] relative">
          <img src={hero} alt="hero section" />

          <div className="absolute -right-10 w-fit top-[50%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md ">
            <div className="text-center mb-1 text-sm text-mine-shaft-100">
              10k+ got Jobs
            </div>
            <Avatar.Group>
              <Avatar name="Yogesh Chandra" color="initials" />
              <Avatar name="Prashant Sharma" color="initials" />
              <Avatar name="Bhuwan Chandra" color="initials" />
              <Avatar>+5</Avatar>
            </Avatar.Group>
          </div>
          <div className="absolute -left-6 w-fit top-[28%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                <img src={googleImage} alt="" />
              </div>
              <div className="text-sm flex flex-col text-mine-shaft-100">
                <span>Software Engineer</span>
                <span className="text-mine-shaft-200 text-xs">New York</span>
              </div>
            </div>
            <div className="flex gap-2 justify-around text-mine-shaft-200 text-xs">
              <span>1 day ago</span>
              <span>120 Applicants</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
