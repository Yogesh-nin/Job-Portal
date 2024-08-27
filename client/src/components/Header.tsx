import { Avatar, Indicator } from "@mantine/core";
import {
  IconAnchor,
  IconAsset,
  IconBell,
  IconSettings,
} from "@tabler/icons-react";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const navLinks = [
    {
      name: "Find jobs",
      link: "/find-jobs",
    },
    {
      name: "Find Talent",
      link: "/find-talent",
    },
    {
      name: "Upload Jobs",
      link: "/upload-jobs",
    },
    {
      name: "About us",
      link: "/about-us",
    },
  ];

  const location = useLocation();

  return (
    <nav className="w-full bg-mine-shaft-950 px-6 text-white h-28 flex justify-between items-center">
      <div className="flex gap-3 items-center text-bright-sun-400">
        <IconAnchor className="h-8 w-8 " stroke={2.5} />
        <div className="text-3xl font-semibold">iJobs</div>
      </div>

      <ul className="flex gap-5 text-mine-shaft-300 h-full items-center">
        {navLinks.map((link, index) => {
          return (
            <li key={index} className={`${location.pathname == link.link ? "border-bright-sun-400 text-bright-sun-400" : "border-transparent" } border-t-[3px] h-full flex items-center`}>
              <NavLink to={link.link} >{link.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-3">
          <div className="">Marshell</div>
          <Avatar src="avtar.png" alt="me" />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="brightSun.4" offset={6} size={9} processing>
            <IconBell stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </nav>
  );
};

export default Header;
