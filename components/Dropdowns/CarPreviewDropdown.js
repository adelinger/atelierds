import React, { useEffect, useRef, useState } from "react";
import { createPopper } from "@popperjs/core";
import PropTypes from "prop-types";
import onClickOutside from 'react-onclickoutside'
import listenForOutsideClicks from "utils/listen-for-outside-clicks";


function CarPreviewDropdown({ dropDownShow }) {
  
  const popoverDropdownRef = React.createRef();
  const btnRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () =>{
    createPopper(btnRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setIsOpen(!isOpen);
  } 

  useEffect(listenForOutsideClicks(listening, setListening, btnRef, setIsOpen));


  return (
    <>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#"
        ref={btnRef}
        onClick={(e) => {
          e.preventDefault();
          toggle();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (isOpen ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="#"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Action
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
      </div>
    </>
  );
};

export default CarPreviewDropdown;

