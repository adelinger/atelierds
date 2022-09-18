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
        <div className="relative pt-16 pb-16 md:pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('/img/light-grey-19.webp')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center mt-5">
                <div className="">
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
              <div className="container mx-auto ">
                {
                  cars.length === 0 ? 
                 <div className="text-center">
                    <Image
                    src="/img/errors/no-results.png"
                    width={300}
                    height={300}
                    ></Image>
                 </div>
                    :
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
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

        </div>

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
