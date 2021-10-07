import React from "react";
import { BiMenu } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import { ReactComponent as Logo } from "./focaltimer-logo.svg";

export default function Navbar({ showNav, setShowNav }) {
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <>
      <div className="mx-auto container px-4 sticky top-0 h-20 flex items-center text-gray-600 border-b-2 border-gray-100 bg-white z-30">
        <div className="flex items-center">
          <Logo className="w-10 h-10" />
          <h1 className="ml-2 text-lg font-bold">FocalTimer</h1>
        </div>
        <div className="ml-auto gap-2 hidden md:flex items-center">
          <Link to="/" aria-label="Home">
            <NavbarItem title="Home" path="/" />
          </Link>
          <Link to="/blog" aria-label="Blog">
            <NavbarItem title="Blog" path="/blog" />
          </Link>
          <Link to="/projects" aria-label="Projects">
            <NavbarItem title="Projects" path="/projects" />
          </Link>
          <Link to="/about" aria-label="About me">
            <NavbarItem title="About me" path="/about" />
          </Link>
          <Link to="/contact" aria-label="Contact">
            <NavbarItem title="Contact" path="/contact" />
          </Link>
          <Link to="/product" aria-label="Product">
            <NavbarItem title="Product" path="/product" />
          </Link>
          <span className="w-0.5 h-8 mx-2 bg-gray-100" />
          <a
            href="https://github.com/Kerbodine/pp-react-app"
            rel="noreferrer"
            target="_blank"
            className="w-8 h-8 rounded-md hover:bg-gray-600 text-gray-600 hover:text-white flex items-center justify-center text-2xl"
          >
            <FaGithub />
          </a>
        </div>
        <div
          className={`ml-auto w-10 h-10 rounded-md flex items-center justify-center visible md:hidden cursor-pointer ${
            showNav ? "bg-gray-600 text-white" : "hover:bg-gray-100"
          }`}
          onClick={toggleNav}
        >
          <BiMenu className="text-2xl" />
        </div>
      </div>
      <div
        className={`${
          showNav ? "visible md:hidden" : "hidden"
        } fixed top-20 bottom-0 overflow-hidden w-full bg-white flex flex-col items-center justify-center z-30`}
      >
        <h3 className="text-4xl font-bold ">FocalTimer</h3>
        <p className="text-gray-500">Your all in one productivity suite</p>
        <div className="mt-8 flex flex-col items-center">
          <Link to="/" aria-label="Home">
            <NavbarItem title="Home" path="/" onClick={closeNav} />
          </Link>
          <Link to="/blog" aria-label="Blog">
            <NavbarItem title="Blog" path="/blog" onClick={closeNav} />
          </Link>
          <Link to="/projects" aria-label="Projects">
            <NavbarItem title="Projects" path="/projects" onClick={closeNav} />
          </Link>
          <Link to="/about" aria-label="About me">
            <NavbarItem title="About me" path="/about" onClick={closeNav} />
          </Link>
          <Link to="/contact" aria-label="Contact">
            <NavbarItem title="Contact" path="/contact" onClick={closeNav} />
          </Link>
          <Link to="/product" aria-label="Product">
            <NavbarItem title="Product" path="/product" onClick={closeNav} />
          </Link>
          <span className="w-20 h-0.5 bg-gray-100 my-4"></span>
          <a
            href="https://github.com/Kerbodine/pp-react-app"
            rel="noreferrer"
            target="_blank"
            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-600 hover:text-white text-2xl rounded-md"
          >
            <FaGithub />
          </a>
        </div>
        <div className="text-sm text-gray-500 mt-8 text-center">
          <p>@FocalTimer 2021</p>
          <p>SPARC Passion Project</p>
          <p>Developed & Designed by Michael Tong</p>
        </div>
      </div>
    </>
  );
}
