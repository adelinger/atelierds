import Footer from 'components/Footers/Footer';
import Navbar from 'components/Navbars/IndexNavbar';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ImagePreview from 'components/Modals/ImagePreview';
import { BrowserView } from 'react-device-detect';
import { isMobile } from 'react-device-detect';
import { getPictures } from 'lib/apiCalls';
import { useTranslation } from 'next-i18next';


export default function chrome({ images, STATIC_FILES_URL }) {
  const { t } = useTranslation('chromePage');

  const FILES_URL = STATIC_FILES_URL + 'chrome/';
  const scrollRef = useRef(null)
  const executeScroll = () => scrollRef.current.scrollIntoView({ behavior: 'smooth' });

  const [showModal, setShowModal] = useState(false);
  const [imgSrc, setImgSrc] = useState();

  const toggleModal = () => {
    if (!isMobile) {
      setShowModal(!showModal);
    }
  }

  useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode === 27) {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <>
      <Navbar transparent></Navbar>
      <main>
        <div className="relative pt-16 pb-20 flex content-center items-center justify-center min-h-screen-75">
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
          <div className="container relative mx-auto collapse">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="mt-10  text-center">
                  <h1 className="text-white font-semibold text-5xl">
                    {t('title')}
                  </h1>

                </div>
              </div>
              <section id='first-section'>
                <div className="container mx-auto">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 py-10 md:py-20">
                    <div className="w-full px-4 mr-auto ml-auto -mt-5">
                      <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto">
                        <div className="md:mt-10">
                          <h1 className="text-white font-semibold text-3xl">
                            {t('our_work_title')}
                          </h1>

                        </div>
                      </div>
                      <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
                        {t('our_work_text_1')}
                      </p>
                      <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-white">
                        {t('our_work_text_2')}
                      </p>
                      <div className='mt-8 text-center'>
                        <button onClick={executeScroll} type="button" class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 
                        font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                          {t('see_gallery_btn')}
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </button>
                      </div>

                    </div>

                    <div className="w-full px-4 mr-auto ml-auto mr-auto">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full md:w-4/6 mb-6 shadow-lg rounded-lg bg-blueGray-700 md:float-right mx-auto ">
                        <Image
                          alt="Citroen ds chrome door part"
                          src="/img/ds-door-handle.webp"
                          className="w-full align-middle rounded-t-lg"
                          width={500}
                          height={300}
                        />
                        <blockquote className="relative p-8 mb-4">
                          <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 583 95"
                            className="absolute left-0 w-full block h-95-px -top-94-px"
                          >
                            <polygon
                              points="-30,95 583,95 583,65"
                              className="text-blueGray-700 fill-current"
                            ></polygon>
                          </svg>
                          <h4 className="text-xl font-bold text-white">
                            {t('quality_service_title')}
                          </h4>
                          <p className="text-md font-light mt-2 text-white">
                            {t('quality_service_text')}

                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id='second-section' className='min-w-full px-8'>
                <div className="container mx-auto ">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto md:text-center">
                    <div className="md:mt-10">
                      <h1 className="text-white font-semibold text-3xl">
                        {t('what_do_we_fix_title')}
                      </h1>

                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3 place-items-center">
                    <div className="mt-5 mb-5" >
                      <h3 className="text-1xl mb-2 font-bold leading-normal text-white">{t('fix_type_1')}</h3>
                      <ul className='list-disc text-white'>
                        <li>{t('fix_1_1')}</li>
                        <li>{t('fix_1_2')}</li>
                        <li>{t('fix_1_3')}</li>
                        <li>{t('fix_1_4')}</li>
                        <li>{t('fix_1_5')}</li>
                        <li>{t('fix_1_6')}</li>
                        <li>{t('fix_1_7')}</li>
                        <li>{t('fix_1_8')}</li>
                        <li>{t('fix_1_9')}</li>
                        <li>{t('fix_1_10')}</li>
                        <li>{t('fix_1_11')}</li>
                        <li>{t('fix_1_12')}</li>
                        <li>{t('fix_1_13')}</li>
                        <li>{t('fix_1_14')}</li>
                        <li>{t('fix_1_15')}</li>
                        <li>{t('fix_1_16')}</li>
                        <li>{t('fix_1_17')}</li>
                      </ul>
                    </div>
                    < div className="md:mt-5 md:mb-5" >
                      <h3 className="text-1xl mb-2 font-bold leading-normal text-white">{t('fix_type_2')}</h3>
                      <ul className='list-disc text-white'>
                        <li>{t('fix_2_1')}</li>
                        <li>{t('fix_2_2')}</li>
                        <li>{t('fix_2_3')}</li>
                        <li>{t('fix_2_4')}</li>
                        <li>{t('fix_2_5')}</li>
                        <li>{t('fix_2_6')}</li>
                        <li>{t('fix_2_7')}</li>
                        <li>{t('fix_2_8')}</li>
                        <li>{t('fix_2_9')}</li>
                        <li>{t('fix_2_10')}</li>
                        <li>{t('fix_2_11')}</li>
                        <li>{t('fix_2_12')}</li>
                        <li>{t('fix_2_13')}</li>
                        <li>{t('fix_2_14')}</li>
                        <li className='hidden md:block md:invisible'></li>
                        <li className='hidden md:block md:invisible'></li>
                        <li className='hidden md:block md:invisible'></li>
                        <li className='hidden md:block md:invisible'></li>
                      </ul>
                    </div>
                    < div className="md:mt-5 md:mb-5" >
                      <h3 className="text-1xl mb-2 font-bold leading-normal text-white">{t('fix_type_3')}</h3>
                      <ul className='list-disc text-white'>
                        <li>{t('fix_3_1')}</li>
                        <li>{t('fix_3_2')}</li>
                        <li>{t('fix_3_3')}</li>
                        <li>{t('fix_3_4')}</li>
                        <li>{t('fix_3_5')}</li>
                        <li>{t('fix_3_6')}</li>
                        <li>{t('fix_3_7')}</li>
                        <li>{t('fix_3_8')}</li>
                        <li>{t('fix_3_9')}</li>
                        <li>{t('fix_3_10')}</li>
                        <li>{t('fix_3_11')}</li>
                        <li>{t('fix_3_12')}</li>
                        <li className='hidden md:block md:invisible'></li>
                        <li className='hidden md:block md:invisible'></li>
                        <li className='hidden md:block md:invisible'></li>
                        <li className='hidden md:block md:invisible'></li>
                      </ul>
                    </div>

                  </div>
                </div>
              </section>
              <section id='third-section' ref={scrollRef} className='min-w-full px-5 mt-10'>
                <div className="container mx-auto ">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto md:text-center">
                    <div className="md:mt-10">
                      <h1 className="text-white font-semibold text-3xl">
                        {t('gallery_title')}
                      </h1>

                    </div>
                  </div>
                  <div className="mt-5">
                    <div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
                      {images.listOfImages.map((image, index) => {
                        return <div class="w-full rounded md:hover:opacity-50 md:cursor-pointer">
                          <img src={FILES_URL + image}
                            alt="chrome restoration image" onClick={() => { toggleModal(), setImgSrc(FILES_URL + image) }}>
                          </img>
                        </div>
                      })}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {BrowserView &&
            <ImagePreview
              showModal={showModal}
              src={imgSrc}
              toggleModal={toggleModal}
            ></ImagePreview>
          }
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export async function getStaticProps({ params, locale }) {
  const images = await getPictures('chrome');

  const { STATIC_FILES_URL } = process.env;

  return {
    props: {
      ...await serverSideTranslations(locale, ['chromePage', 'footer']),
      images,
      STATIC_FILES_URL,
    },
  };
}