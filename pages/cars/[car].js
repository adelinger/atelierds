import React, { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from 'components/Navbars/IndexNavbar';
import Footer from 'components/Footers/Footer';
import { getSingleCar, loadCars } from 'lib/apiCalls';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CardEmail from 'components/Cards/CardEmail';

function viewCar({ carData, STATIC_FILES_URL }) {
  const { t } = useTranslation('common');
  const FILES_URL = STATIC_FILES_URL + carData.carPhotosPath + '/';
  const [showEmailForm, setShowEmailForm] = useState();
  const baseRef = useRef(null);

  const handleEmailbtnClick = () => {
    setShowEmailForm(!showEmailForm);


    if(showEmailForm){
      baseRef.current.scrollIntoView({behavior: 'smooth'});
    }

    
  }

  return (
    <>
      <Navbar />
      <main>
        <div ref={baseRef} className="relative pt-16 md:pb-32 flex content-center items-center justify-center min-h-screen-75">
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
              <div class="container pt-20 md:py-0 mx-auto flex md:px-5 -pt-5 md:pt-20 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start items-center">
                  <div className="mobile-width md:w-96 px-3 py-2 bg-slate-200 rounded-xl focus:outline-0 ">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium font-bold text-black">
                      {carData.carMake + ' ' + carData.carModel}
                    </h1>
                    <li className="mb-2 text-1x1 leading-relaxed text-black">Year: {carData.carYear}</li>
                    <li className="mb-2 text-1x1 leading-relaxed text-black">Color: {carData.carColor} </li>
                    <li className="mb-2 text-1x1 leading-relaxed text-black">Engine power: {carData.carYear}</li>
                    <li className="mb-2 text-1x1 leading-relaxed text-black">Engine type: {carData.carYear}</li>
                    <li className="mb-2 text-1x1 leading-relaxed text-black">Kilometers: {carData.carYear}</li>
                    <p className="mb-1 text-1x1 leading-relaxed text-black font-bold">Price: {carData.carYear} (€)</p>
                  </div>

                  <div>
                    <textarea class="mobile-width md:w-96 h-36 px-3 py-2 bg-slate-200 rounded-xl focus:outline-0 mt-5"
                      placeholder="Description">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </textarea>

                  </div>
                </div>

                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-2 md:mb-0 mt-5 md:-mt-5" style={{ maxWidth: 700 }}>
                  <Slide>
                    {carData.listOfImages.map((slideImage, index) => (
                      <div className="each-slide md:h-full" key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundSize: 'cover'}}>
                        <div >
                          <img className='max-h-72 md:max-height-450 mobile-width lg:images-width' src={FILES_URL + slideImage} ></img>
                        </div>
                      </div>
                    ))}
                  </Slide>
                </div>
              </div>

              <div class="flex justify-center -mt-15 md:mt-5 ">
              <button class="inline-flex text-white bg-indigo-500 border-0 md:py-2 md:px-4 py-4 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleEmailbtnClick}>

                <span className='mr-2'> {t('send_inquiry')}</span>
                <i class="fas fa-envelope mt-1"></i>
              </button>

            </div>

            </section>

            <section className="relative block lg:pt-0 mt-10">
              <div className="container mx-auto px-4">

                <div className="flex flex-wrap justify-center">
                  {showEmailForm &&
                    <CardEmail t={t} car={carData} ></CardEmail>}
                </div>
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
      ...await serverSideTranslations(locale, ['common', 'footer']),
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
    locale: locale
  })))
    .flat() // Flatten array to avoid nested arrays

  return { paths, fallback: true }

}
