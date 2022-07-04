import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import listenForOutsideClicks from "utils/listen-for-outside-clicks";
import { createPopper } from "@popperjs/core";

// components
import LanguagesDropdown from 'components/Dropdowns/languagesDropdown.js';

export default function Navbar(props) {
  const popoverDropdownRef = React.createRef();
  const btnRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation('index');

  const toggle = () =>{
    createPopper(btnRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setIsOpen(!isOpen);
  } 

  useEffect(listenForOutsideClicks(listening, setListening, btnRef, setIsOpen));

  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#"
              >
                {t('atelierDS')}
              </a>
            </Link>
            <button
              ref={btnRef}
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => toggle()}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
          
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (isOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">

              <li className="flex items-center">
                <Link href="/cars">
                  <a
                    href="#"
                    className={
                      "lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    }
                  >
                    Cars for sale
                  </a>
                </Link>

              </li>
              <li className="flex items-center">
                <Link href="/">
                  <a
                    href="#"
                    className={
                      "lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    }
                  >
                    Interior
                  </a>
                </Link>

              </li>
              <li className="flex items-center">
                <Link href="/">
                  <a
                    href="#"
                    className={
                      "lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    }
                  >
                    Chrome parts
                  </a>
                </Link>

              </li>
              <li className="flex items-center">
                <Link href="/">
                  <a
                    href="#"
                    className={
                      "lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    }
                  >
                    Body restoration
                  </a>
                </Link>

              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F"
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>
              <li className="flex items-center">
              <LanguagesDropdown />
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
