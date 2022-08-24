import Footer from 'components/Footers/Footer';
import Navbar from 'components/Navbars/IndexNavbar';
import React, { useRef, useState } from 'react';
import Image from 'next/image';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ImagePreview from 'components/Modals/ImagePreview';
import { BrowserView } from 'react-device-detect';
import { isMobile } from 'react-device-detect';
import { getPictures } from 'lib/apiCalls';


export default function chrome({ images, STATIC_FILES_URL }) {
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

  return (
    <>
      <Navbar transparent></Navbar>
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
          <div className="container relative mx-auto collapse">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="mt-10  text-center">
                  <h1 className="text-white font-semibold text-5xl">
                    Chrome
                  </h1>

                </div>
              </div>
              <section id='first-section'>
                <div className="container mx-auto">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 py-10 md:py-20">
                    <div className="w-full px-4 mr-auto ml-auto -mt-5">
                      <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                        Our work
                      </h3>
                      <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
                        Preparation service for normally disassembled, scratched and dented stainless steel parts and the bumpers,
                        it is not about stainless steel (inox) but about ferrochrome (slightly magnetic) at Citroen,
                        all errors are corrected as far as possible and the polish is even better and deeper than the original.
                      </p>
                      <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-white">
                        In the case of a high-quality restoration, the old built-in stainless steel parts usually
                        cannot keep up and it is therefore advisable to refurbish them.
                      </p>
                      <div className='mt-8 text-center'>
                        <button onClick={executeScroll} type="button" class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 
                        font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                          See the galery
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
                            Quality service
                          </h4>
                          <p className="text-md font-light mt-2 text-white">
                            This program is particularly suitable for extraordinary top renovations where the new condition
                            is really aimed for and achieved as far as possible.

                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id='second-section' className='min-w-full px-8'>
                <div className="container mx-auto ">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div className="md:mt-10">
                      <h1 className="text-white font-semibold text-3xl">
                        What do we fix?
                      </h1>

                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3 place-items-center">
                    <div className="mt-5 mb-5" >
                      <h3 className="text-1xl mb-2 font-bold leading-normal text-white">DS PALLAS von 1969 bis 1971</h3>
                      <ul className='list-disc text-white'>
                        <li>Front and rear bumpers complete</li>
                        <li>All stainless steel sill</li>
                        <li>All trim strips inside doors and roof area</li>
                        <li>All roof connections outside stainless steel including the trumpets</li>
                        <li>4 inside handles with grip shells</li>
                        <li>Polishing of the outside</li>
                        <li>Lights and loop</li>
                        <li>Sun visors</li>
                        <li>Mirror holder</li>
                        <li>Chrome surround steering wheel</li>
                        <li>Ashtray</li>
                        <li>If necessary new chrome plating of the dashboard (showroom effect )</li>
                        <li>Chrome plating on the gear lever and the ventilationWiper arms Hubcaps</li>
                        <li>Trunk hinges</li>
                      </ul>
                    </div>
                    < div className="md: mt-5 md:mb-5" >
                      <h3 className="text-1xl mb-2 font-bold leading-normal text-white">DS PALLAS von 1969 bis 1971</h3>
                      <ul className='list-disc text-white'>
                        <li>Bumpers front and rear completely</li>
                        <li>All stainless steel rocker panels</li>
                        <li>All trim strips inside door and roof area</li>
                        <li>All roof connections outside stainless steel including the trumpets</li>
                        <li>4 inside handles with handle shells</li>
                        <li>Polishing of the outside handles interior</li>
                        <li>Lights and loop holder</li>
                        <li>Sun visors</li>
                        <li>Chrome plating of the gear lever</li>
                        <li>Dashboard 3 chrome rings</li>
                        <li>Wiper arms</li>
                        <li>Hubcaps</li>
                        <li>Spray nozzles</li>
                        <li>Trunk hinges</li>
                        <li className='invisible'></li>
                        <li className='invisible'></li>
                      </ul>
                    </div>
                    < div className="md:mt-5 md:mb-5" >
                      <h3 className="text-1xl mb-2 font-bold leading-normal text-white">DS PALLAS von 1971 bis 1975</h3>
                      <ul className='list-disc text-white'>
                        <li>Bumpers front and rear</li>
                        <li>All stainless steel rocker panels</li>
                        <li>All trim strips inside doors and roof area</li>
                        <li>All roof connections outside stainless steel including the trumpets</li>
                        <li>4 inside handles with handle shells</li>
                        <li>Interior lights and loop holders</li>
                        <li>Sun visors</li>
                        <li>Chrome plating of the gear lever</li>
                        <li>Instrument panel, 3 chrome rings</li>
                        <li>Hubcaps</li>
                        <li>Trunk hinges</li>
                        <li>4 outside door buckles, flat, newly chromed</li>
                        <li className='invisible'></li>
                        <li className='invisible'></li>
                        <li className='invisible'></li>
                        <li className='invisible'></li>
                      </ul>
                    </div>

                  </div>
                </div>
              </section>
              <section id='third-section' ref={scrollRef} className='min-w-full px-5'>
                <div className="container mx-auto ">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div className="mt-10">
                      <h1 className="text-white font-semibold text-3xl">
                        Gallery
                      </h1>

                    </div>
                  </div>
                  <div className="mt-5">
                    <div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
                      {images.listOfImages.map((image, index) => {
                        return <div class="w-full rounded md:hover:opacity-50 md:cursor-pointer">
                          <img src={FILES_URL + image}
                            alt="chrome restoration image"  onClick={() => { toggleModal(), setImgSrc(FILES_URL + image) }}>
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
      ...await serverSideTranslations(locale, ['common', 'index', 'footer']),
      images,
      STATIC_FILES_URL,
    },
  };
}