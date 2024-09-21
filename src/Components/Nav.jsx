import { Button, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function Nav() {
  const [isHome, setIsHome] = useState(false);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    if (location.pathname === "/") setIsHome(true);
  });
  return (
    <div className={isHome ? "hidden" : "block sticky top-0 z-50"}>
      <Navbar
        fluid
        rounded
        className="fixed w-full rounded-none z-50 bg-black border-b"
      >
        <Navbar.Brand href="https://flowbite-react.com">
          {/* <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
          /> */}
          <span className="self-center md:block hidden text-center text-white whitespace-nowrap text-xl font-semibold dark:text-white z-50">
            CloudChamp
          </span>
        </Navbar.Brand>
        <div className="flex w-full md:w-fit justify-between md:order-1">
          <Button className="bg-sky-500 py-0 ">Hire Me</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-white font-thin" : "text-gray-400 font-thin"
              }
            >
              Home
            </NavLink>
          </Navbar.Link>
          <Navbar.Link href="/services">
            <NavLink
              to={"/services"}
              className={({ isActive }) =>
                isActive ? "text-white font-thin" : "text-gray-400 font-thin"
              }
            >
              Services
            </NavLink>
          </Navbar.Link>
          <Navbar.Link href="/cources">
            <NavLink
              to={"/cources"}
              className={({ isActive }) =>
                isActive ? "text-white font-thin" : "text-gray-400 font-thin"
              }
            >
              Cources
            </NavLink>
          </Navbar.Link>
          <Navbar.Link href="/contact">
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "text-white font-thin" : "text-gray-400 font-thin"
              }
            >
              Contact
            </NavLink>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
