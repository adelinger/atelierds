import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

// components

import Navbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getSingleCar, loadCars } from "lib/apiCalls";
import CarCard from "components/Cards/CarCard";
import Image from "next/image";
import ApiService from "auth/service/ApiService";

export default function carsForSale({ cars, serverUrl }) {
  const { t } = useTranslation('carsPage');
  const dropdownMenuRef = useRef();
  const [isDropdownVisible, setIsDropdownVisible] = useState();
  const [carsList, setCarsList] = useState(cars);

  const api = new ApiService();

  const getAllCars = async (e) => {
    api
      .getCarsPublic()
      .then(response => response.data)
      .then(data => {
        setCarsList(data);
      })
      .catch((error) => {
      });
  }

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('/img/cars/citroen_ds_garrage_cover.webp')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 mt-5 md:mt-0 md:px-4 ml-auto mr-auto text-center">
                <div>
                  <h1 className="text-white font-semibold text-5xl mt-5">
                    {t('cars_for_sale')}
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    {cars.length === 0 ?
                      <p className="text-gray-100 mt-10 mb-10">We are sorry, we do not have any cars for sale at the moment.</p>
                      :
                      t('title_message')
                    }
                  </p>
                  <div>
                    <button id="dropdownRadioBgHoverButton" onClick={toggleDropdown} data-dropdown-toggle="dropdownRadioBgHover" class="mt-5 btn-primary-indigo inline-flex items-center" type="button">Sort Cars By<svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                    <div id="dropdownRadioBgHover" ref={dropdownMenuRef}
                      class={`${isDropdownVisible ? '' : 'hidden'} position-center ml-auto mr-auto mt-1 z-10 w-52 bg-white rounded divide-y divide-gray-100 
                        shadow dark:bg-gray-700 dark:divide-gray-600`}>
                      <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioBgHoverButton">
                        <li>
                          <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <label for="default-radio-1" class="mr-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                              <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                              focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
                              &nbsp; Year - Younger First
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <label for="default-radio-2" class="text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                              <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300
                               focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
                              &nbsp; Year - Older First</label>
                          </div>
                        </li>
                        <li>
                          <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <label for="default-radio-3" class="text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                              <input id="default-radio-3" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                              focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
                              &nbsp; Price - Lower First</label>
                          </div>
                        </li>
                        <li>
                          <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <label for="default-radio-4" class="text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                              <input id="default-radio-4" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                              focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
                              &nbsp; Price - Higher First</label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-8 rounded-lg">
                {
                  carsList.length === 0 ?
                    <div className="text-center">
                      <Image
                        alt="No results"
                        src="/img/errors/no-results.webp"
                        width={300}
                        height={300}
                      ></Image>
                    </div>
                    :
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 flex-auto">
                      {carsList.map(car =>
                        <div className="mt-5 mb-5 ml-auto mr-auto" >
                          <CarCard car={car} serverUrl={serverUrl}></CarCard>
                        </div>
                      )}

                    </div>
                }
              </div>
            </div>
            {carsList.length === 9 &&
            <div className="w-full text-center">
            <button className="mt-5 btn-primary-indigo" onClick={getAllCars}>Show more...</button>
          </div>
            }
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}




export async function getStaticProps({ locale }) {
  const cars = await loadCars(9);
  const { STATIC_FILES_URL } = process.env;
  return {
    props: {
      cars: cars,
      serverUrl: STATIC_FILES_URL,
      ...await serverSideTranslations(locale, ['common', 'carsPage', 'footer']),
    }
  }
}


export async function getCarData(id) {
  const car = await getSingleCar(id);

  return {
    id,
    ...car,
  };
}
