import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talent", url: "find-talents" },
    { name: "Post Jobs", url: "post-job" },
    { name: "Posted Job", url: "posted-job" },
  ];
  const location = useLocation();
  return (
    <div className='flex gap-5 text-mine-shaft-300 h-full items-center'>
      {
        links.map((link, index) => {
          const isActive = location.pathname === `/${link.url}`;
          return (
            <Link
              key={index}
              to={`/${link.url}`}
              className={`h-full flex items-center border-t-[3px] px-2 ${
                isActive
                  ? "border-bright-sun-400 text-bright-sun-400"
                  : "border-transparent"
              }`}
            >
              {link.name}
            </Link>
          )
        })
      }
    </div>
  )
}

export default NavLinks
