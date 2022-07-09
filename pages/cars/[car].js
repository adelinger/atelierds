import React, { useCallback, useEffect, useState } from 'react';
import Navbar from 'components/Navbars/IndexNavbar';
import Footer from 'components/Footers/Footer';
import { getSingleCar, loadCars } from 'lib/apiCalls';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function viewCar({ carData, STATIC_FILES_URL }) {
  const { t } = useTranslation('common');
  const FILES_URL = STATIC_FILES_URL + carData.carPhotosPath + '/';
  return (
    <>
      <Navbar />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('/img/light-grey-19.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <section class="text-gray-600 body-font">
              <div class="container mx-auto flex px-5 -pt-5 md:pt-20 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                  <Slide>
                    {carData.listOfImages.map((slideImage, index) => (
                      <div className="each-slide" key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundSize: 'cover', height: 350 }}>
                        <div >
                          <img src={FILES_URL + slideImage} style={{ height: 'auto' }}></img>
                        </div>
                      </div>
                    ))}
                  </Slide>
                </div>
                <div class="-mt-14 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start ">
                  <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start '>
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{carData.carModel + ' ' + carData.carMake}
                      <p className="hidden lg:inline-block">   </p>
                    </h1>
                    <p class="mb-2 leading-relaxed text-white text-center">Year: {carData.carYear}</p>
                    <p class="mb-2 leading-relaxed text-white text-center">Color: {carData.carColor}</p>
                    <p class="mb-2 leading-relaxed text-white text-center">Engine power: {carData.carYear}</p>
                    <p class="mb-2 leading-relaxed text-white text-center">Engine type: {carData.carYear}</p>
                    <p class="mb-2 leading-relaxed text-white text-center">Kilometers: {carData.carYear}</p>
                    <p class="mb-1 leading-relaxed text-white text-center bold-">Price: {carData.carYear} (€)</p>
                  </div>

                </div>
              </div>
              <div>
                <p class="mb-5 mt-5 leading-relaxed text-white ml-5">{carData.carDescription}</p>
              </div>
              <div class="flex justify-center">
                      <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                     
                      <span className='mr-2'> {t('send_inquiry')}</span>
                      <i class="fas fa-envelope mt-1"></i>
                        </button>
                      
                    </div>
            </section>


          </div>

        </div>

      </main>
      <Footer />
    </>
  );
}
export default viewCar;



export async function getStaticProps({ params, locale }) {
  const carData = await getSingleCar(params.car);
  const { STATIC_FILES_URL } = process.env;
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'index']),
      carData,
      STATIC_FILES_URL,
    },
  };
}



export async function getStaticPaths({ locales }) {
  const cars = await loadCars();

  // generate the paths
  const paths = cars.map((car) => locales.map((locale) => ({
    params: { car: car.atelierCarID.toString() },
    locale:locale
  })))
  .flat() // Flatten array to avoid nested arrays
  
  return { paths, fallback: true }

}

