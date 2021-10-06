import React, { useState } from "react";
import { BiAperture, BiMenu, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(false);
  };

  return (
    <>
      <div className="sticky top-0 h-20 flex items-center text-gray-600 border-b-2 border-gray-100">
        <div className="flex items-center">
          <BiAperture className="text-3xl" />
          <h1 className="ml-2 text-lg font-bold">FocalTimer</h1>
        </div>
        <div className="ml-auto gap-2 hidden md:flex">
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
        </div>
        <div
          className={`ml-auto w-8 h-8 rounded-md flex items-center justify-center visible md:hidden ${
            showNav ? "bg-gray-600 text-white" : "hover:bg-gray-100"
          }`}
          onClick={() => {
            setShowNav(!showNav);
          }}
        >
          <BiMenu className="text-2xl" />
        </div>
      </div>
      <div
        className={`${
          showNav ? "visible md:hidden" : "hidden"
        } absolute left-0 w-full h-[calc(100vh-6rem)] bg-white flex flex-col items-center justify-center z-50`}
      >
        <h3 className="text-4xl font-bold ">FocalTimer</h3>
        <p className="text-gray-500">Your all in one productivity suite</p>
        <div className="mt-8 flex flex-col items-center">
          <Link to="/" aria-label="Home">
            <NavbarItem title="Home" path="/" onClick={toggleNav} />
          </Link>
          <Link to="/blog" aria-label="Blog">
            <NavbarItem title="Blog" path="/blog" onClick={toggleNav} />
          </Link>
          <Link to="/projects" aria-label="Projects">
            <NavbarItem title="Projects" path="/projects" onClick={toggleNav} />
          </Link>
          <Link to="/about" aria-label="About me">
            <NavbarItem title="About me" path="/about" onClick={toggleNav} />
          </Link>
          <Link to="/contact" aria-label="Contact">
            <NavbarItem title="Contact" path="/contact" onClick={toggleNav} />
          </Link>
          <Link to="/product" aria-label="Product">
            <NavbarItem title="Product" path="/product" onClick={toggleNav} />
          </Link>
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
