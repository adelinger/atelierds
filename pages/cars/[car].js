import React, { useRef, useState } from 'react';
import Navbar from 'components/Navbars/IndexNavbar';
import Footer from 'components/Footers/Footer';
import { getSingleCar, loadCars } from 'lib/apiCalls';
import Image from 'next/image';
import 'react-slideshow-image/dist/styles.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CardEmail from 'components/Cards/CardEmail';
import PrimaryButton from 'components/Buttons/PrimaryButton';

function viewCar({ carData, STATIC_FILES_URL }) {
  const { t } = useTranslation('common');
  const FILES_URL = STATIC_FILES_URL + carData.carPhotosPath + '/';
  const profilePhoto = FILES_URL + carData.carProfilePhotoPath;
  const title = carData.carMake + ' ' + carData.carModel;
  const [showEmailForm, setShowEmailForm] = useState();
  const baseRef = useRef(null);

  const handleEmailbtnClick = () => {
    setShowEmailForm(!showEmailForm);

    if (showEmailForm) {
      baseRef.current.scrollIntoView({ behavior: 'smooth' });
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
                "url('/img/light-grey-19.webp')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>

          <div className="container relative mx-auto">
            <section class="text-gray-600 body-font">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center mt-10">
                  <div className="text-center">
                    <h1 className="text-white font-semibold text-5xl">
                      {title}
                    </h1>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="container mx-auto py-5 ">
                <img className='center-image' src={profilePhoto} style={{ height: '60vh', width: 'auto' }}></img>
                <div className='grid grid-cols-1 md:grid-cols-7 gap-7 mt-0 md:-mt-10'>
                  <div className='col-span-2'>
                    <div className="mobile-width md:w-auto h-auto md:h-17 px-3 py-2 bg-slate-200 rounded-xl focus:outline-0">
                      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium font-bold decoration-black">
                        Car specs
                      </h1>
                      <li className="mb-2 text-1x1 leading-relaxed decoration-black">Year: {carData.carYear}</li>
                      <li className="mb-2 text-1x1 leading-relaxed decoration-black">Color: {carData.carColor} </li>
                      <li className="mb-2 text-1x1 leading-relaxed decoration-black">Engine power: {carData.carYear}</li>
                      <li className="mb-2 text-1x1 leading-relaxed decoration-black">Engine type: {carData.carYear}</li>
                      <li className="mb-2 text-1x1 leading-relaxed decoration-black">Kilometers: {carData.carYear}</li>
                      <p className="mb-1 text-1x1 leading-relaxed text-black font-bold">Price: {carData.carYear} (€)</p>
                    </div>
                  </div>
                  <div className='col-span-3'>
                    <div className="mobile-width w-auto h-full px-3 py-2 bg-slate-200 rounded-xl focus:outline-0">
                      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium font-bold decoration-black">
                        Description
                      </h1>
                      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                        essentially unchanged.</p>
                    </div>
                  </div>

                  <div className='col-span-2'>
                    <div className="mobile-width w-auto h-content px-3 py-2 bg-slate-200 rounded-xl focus:outline-0">
                      <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div>
                        <button onClick={handleEmailbtnClick} type="button" class="mr-1 center-image text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none 
                    focus:ring-gray-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-indigo-600 
                    dark:hover:bg-indigo-700 dark:focus:ring-gray-800">

                        <span className='mr-2'> See the gallery</span>
                        <i class="fas fa-image"></i>
                      </button>
                        </div>
                        <div>
                       <PrimaryButton color='gray' iconClass='fas fa-envelope mt-1' title='Send an inquiry' onClickFunction={handleEmailbtnClick}></PrimaryButton>
                        </div>

                      </div>
                      
                     
                    </div>
                  </div>

                </div>
              </div>
            </section>


            <section className="relative block lg:pt-0 mt-10">
              <div class="w-full justify-center text-center -mt-15 md:mt-20 self-center">
                <button onClick={handleEmailbtnClick} type="button" class="self-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">

                  <span className='mr-2'> {t('send_inquiry')}</span>
                  <i class="fas fa-envelope mt-1"></i>
                </button>

              </div>

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
