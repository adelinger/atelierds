import React, { useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

// components

import Navbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getSingleCar, loadCars } from "lib/apiCalls";
import CarCard from "components/Cards/CarCard";
import Image from "next/image";

export default function carsForSale({ cars, serverUrl }) {
  const { t } = useTranslation('carsPage');

  return (
    <>
      <Navbar />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('/img/citroen_ds_garrage.webp')",
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
                  cars.length === 0 ?
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
                      {cars.map(car =>
                        <div className="mt-5 mb-5 ml-auto mr-auto" >
                          <CarCard car={car} serverUrl={serverUrl}></CarCard>
                        </div>
                      )}
  
                    </div>
                }
             </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}




export async function getStaticProps({ locale }) {
  const cars = await loadCars();
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

  // Combine the data with the id
  return {
    id,
    ...car,
  };
}
