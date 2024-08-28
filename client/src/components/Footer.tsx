import { IconAnchor, IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";
import React from "react";
import { footerLinks } from "../data";

const Footer = () => {
  return (
    <footer className="mt-20 pb-5 flex gap-5 justify-around">
      <div className="w-1/4 flex flex-col gap-4">
        <div className="flex gap-1 items-center text-bright-sun-400">
          <IconAnchor className="h-6 w-6 " stroke={2.5} />
          <div className="text-3xl font-semibold">iJobs</div>
        </div>
        <p className="text-sm text-mine-shaft-300 ">
          Job Portal with user Profiles, skill update, certifications, work
          experience, and admin job postings
        </p>
        <ul className="flex gap-3 text-bright-sun-400 [&>li]:bg-mine-shaft-900 [&>li]:p-2 [&>li]:rounded-full [&>li]:cursor-pointer hover:[&>li]:bg-mine-shaft-700">
          <li>
            <IconBrandFacebook />
          </li>
          <li>
            <IconBrandInstagram />
          </li>
          <li>
            <IconBrandX />
          </li>
        </ul>
      </div>
      {
        footerLinks.map((item, index) => <div key={index}>
            <h5 className="text-lg font-semibold mb-4 text-bright-sun-400 ">{item.title}</h5>
            <ul>
                {
                    item.links.map((link, index) => <li key={index} className="text-mine-shaft-300 text-sm hover:text-bright-sun-400 cursor-pointer mb-2 hover:translate-x-2 transition duration-300 ease-in-out">{link}</li>)
                }

            </ul>

        </div>)
      }
    </footer>
  );
};

export default Footer;
