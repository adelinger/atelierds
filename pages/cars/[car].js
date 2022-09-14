import React, { useEffect, useRef, useState } from 'react';
import Navbar from 'components/Navbars/IndexNavbar';
import Footer from 'components/Footers/Footer';
import { getSingleCar, loadCars } from 'lib/apiCalls';
import { isMobile } from 'react-device-detect';
import 'react-slideshow-image/dist/styles.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CardEmail from 'components/Cards/CardEmail';
import ImagePreview from 'components/Modals/ImagePreview';
import { useRouter } from 'next/router';

function viewCar({ carData, STATIC_FILES_URL }) {
  const { t } = useTranslation('common', 'carsPage');
  const FILES_URL = STATIC_FILES_URL + carData.carPhotosPath + '/';
  const profilePhoto = FILES_URL + carData.carProfilePhotoPath;
  const [showEmailForm, setShowEmailForm] = useState();
  const baseRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [imgSrc, setImgSrc] = useState();
  const [src, setSrc] = useState(profilePhoto);
  const galleryRef = useRef(null);
  const [showUpBtn, setShowUpBtn] = useState();


  const handleEmailbtnClick = () => {
    setShowEmailForm(!showEmailForm);

    if (showEmailForm) {
      baseRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    setShowUpBtn(!showUpBtn);
  }

  const handleGalleryBtnClick = () => {
    galleryRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const toggleModal = () => {
    if (!isMobile) {
      setShowModal(!showModal);
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
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="container mx-auto py-5 md:mt-20">
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2 content-start'>
                <div>
                  <img className ='center-image md:min-h-30' 
                   
                   src={src}
                  onMouseOver={e => (setSrc(FILES_URL + carData.listOfImages[carData.listOfImages.length-1]))} 
                  onMouseOut={e => (setSrc(FILES_URL + carData.carProfilePhotoPath))} onClick={handleGalleryBtnClick}
                  ></img>
                </div>

                <div className='md:ml-5 px-3 mb-3'>
                  <div className="">
                  <h1 className="text-white font-semibold text-3xl">
                      {carData.carModel + ' ' + carData.carMake}
                    </h1>
                    <p className="text-gray-300 mt-5"> {t('carsPage:description_text')}</p>
                  </div>
                  <div className="w-auto md:w-auto h-auto md:h-17  py-2  rounded-xl focus:outline-0">
                    <h1 class="title-font font-size:1.5rem text-xl mb-4 font-medium font-semibold text-white ">
                      {t('carsPage:specs')}
                    </h1>
                    <li className=" text-1x1  leading-relaxed text-gray-300">{t('carsPage:year')}: {carData.carYear}</li>
                    <li className=" text-1x1  leading-relaxed text-gray-300">{t('carsPage:color')}: {carData.carColor} </li>
                    <li className=" text-1x1  leading-relaxed text-gray-300">{t('carsPage:engine_power')}: {carData.carYear}</li>
                    <li className=" text-1x1  leading-relaxed text-gray-300">{t('carsPage:engine_type')}: {carData.carYear}</li>
                    <li className=" text-1x1  leading-relaxed text-gray-300">{t('carsPage:kilometers')}: {carData.carYear}</li>
                    <p className="mt-4 text-1x1 leading-relaxed text-white font-bold">{t('carsPage:price')}: {carData.carYear} (€)</p>
                  </div>

                  <div className=' md:px-0 mt-3 mb-1'>
                    <div className="md:float-left md:absolute h-content py-2 rounded-xl focus:outline-0">
                      <div className='grid grid-cols-1 grid-flow-col md:grid-cols-2'>
                        <div className='text-center'>
                          <button onClick={handleGalleryBtnClick} type="button" style={{ minWidth: 240 }} className='mr-2 btn-primary-indigo-slim'>
                            <span className='mr-2 text-center w-full'>{t('carsPage:see_the_gallery')}
                              <i class='fas fa-image mt-1 ml-2'></i>
                            </span>
                          </button>
                        </div>

                        <div>
                          <button onClick={handleEmailbtnClick} type="button" style={{ minWidth: 240 }} className='btn-primary-indigo-slim'>
                            <span className='mr-2 w-full'>{t('carsPage:send')}
                              <i class='fas fa-envelope mt-1 ml-2'></i>
                            </span>

                          </button>
                        </div>
                        <div>
                        </div>
                      </div>
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

        <section className="pb-20 -mb-10 bg-blueGray-200 -mt-24 px-3">
          <div ref={galleryRef} className="md: mt-5">
            <div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
              {carData.listOfImages.map((image, index) => {
                return <div class="w-full rounded md:hover:opacity-50 md:cursor-pointer">
                  <img src={FILES_URL + image}
                    alt="chrome restoration image" className='max-h-80 min-h-full min-w-full' onClick={() => { toggleModal(), setImgSrc(FILES_URL + image) }}>
                  </img>
                </div>
              })}
            </div>
          </div>
        </section>

        {showEmailForm &&
        <section className="pb-5 relative block bg-blueGray-800">
           <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
             
                <CardEmail t={t} car={carData} ></CardEmail>
            </div>
          </div>
        </section>
        }

        {!isMobile &&
          <ImagePreview
            showModal={showModal}
            setShowModal={setShowModal}
            src={imgSrc}
            toggleModal={toggleModal}
          ></ImagePreview>
        }

        {showUpBtn &&
          <input type="image" className='float-right mr-5 fixed bottom-0 right-0 mb-5' src="/img/arrow_up.webp" id="scrollUpBtn" width="60" height="60"
          ></input>
        }
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
      ...await serverSideTranslations(locale, ['common', 'footer', 'carsPage']),
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
