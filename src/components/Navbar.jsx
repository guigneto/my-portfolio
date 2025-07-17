"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";


const Navbar = () => {
  const [whatsMessage, setWhatsMessage] = useState("");
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    fetch("/whatsapp_message.txt")
      .then((res) => res.text())
      .then((text) => setWhatsMessage(text));
  }, []);

  const navLinks = [
  {
    title: "Contato",
    path: whatsMessage,
  },
];


  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 ">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          GuiDev
        </Link>
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(true)}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex p-4 md:p-0  rounded-lg flex-row md:space-x-8 mt-0">
            {/* <NavLink href="/" title="About" /> */}
            <NavLink href={whatsMessage} title="Contato" target="_blank" />
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;