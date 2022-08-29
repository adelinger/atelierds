import Footer from 'components/Footers/Footer';
import Navbar from 'components/Navbars/IndexNavbar';
import React from 'react';
import Image from 'next/image';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";


export default function bodywork() {
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
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center mt-10">
                <div className="text-center">
                  <h1 className="text-white font-semibold text-5xl">
                    Bodywork
                  </h1>
                </div>
              </div>
              <div className="container mx-auto py-5 md:mt-20">
                <div class="grid grid-cols-1 md:grid-cols-6 gap-4">

                  <div class="col-span-3 px-5 md:ml-10 md:-mt-10">
                    <div class="items-center justify-center">
                      <h1 class="text-4xl hidden md:block leading-normal text-white font-bold mb-4 text-center">Bodywork done in<br></br>Croatia</h1>
                      <p class="text-gray-300 leading-relaxed font-light text-xl mx-auto pb-2">For many years we have beeng having
                        succesfull partnership with Croatian company <a target='_blank' href='https://autotoni.hr'>Auto Toni.</a>
                        <br></br>   Auto Toni offers high quality work which helps us complete our service. They offer features like:</p>

                    </div>
                    <ul className="list-none mt-6">
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                              <i className="fas fa-comment"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-gray-300">
                              Direct communication with the client
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                              <i class="fas fa-paint-brush"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-gray-300">
                              Top notch quality paint job
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                              <i class="fas fa-hammer"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-gray-300">
                              Toughest bodywork restorations
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                              <i class="fas fa-wrench"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-gray-300">
                              Expert mechanic job
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div class="col-span-3 px-5">
                    <Image src='/img/body_work_place.jpeg' alt='bodywork place' width={700} height={500} />
                  </div>

                </div>
              </div>

              <div className='container'>
              <div className="text-center px-5 py-10 md:mt-10" >
                  <h3 className="text-white font-semibold text-3xl">
                    Work gallery
                  </h3>
                </div>
		<div id="portfolio" class="section relative z-0 py-12 md:py-16 bg-white">
			

			<div class="flex flex-wrap flex-row">
			  <figure class="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp" data-wow-duration="1s">
			    <div class="relative overflow-hidden cursor-pointer mb-6">
			      <a role='button' data-gallery="gallery1" data-glightbox="title: My title; description: This is a wider card with supporting text below as a natural lead-in to additional content" class="glightbox3">
			        <img class="block w-full h-auto transform duration-500 hover:scale-125" src="/img/dummy/slika1.jpeg" alt="Image Description"></img>
			        <div class="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
			          <h3 class="text-base leading-normal font-semibold my-1 text-white">Citroen</h3>
			          <small class="d-block">Branding</small>
			        </div>
			      </a>
			    </div>
			  </figure>

			  <figure class="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
			    <div class="relative overflow-hidden cursor-pointer mb-6">
			      <a role='button' data-gallery="gallery1" data-glightbox="title: My title; description: This is a wider card with supporting text below as a natural lead-in to additional content" class="glightbox3">
			        <img class="block w-full h-auto transform duration-500 hover:scale-125" src="/img/dummy/slika2.jpeg" alt="Image Description"></img>
			        <div class="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
			          <h3 class="text-base leading-normal font-semibold my-1 text-white">Citroen</h3>
			          <small class="d-block">Web</small>
			        </div>
			      </a>
			    </div>
			  </figure>

			  <figure class="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
			    <div class="relative overflow-hidden cursor-pointer mb-6">
			      <a role='button' data-gallery="gallery1" data-glightbox="title: My title; description: This is a wider card with supporting text below as a natural lead-in to additional content" class="glightbox3">
			        <img class="block w-full h-auto transform duration-500 hover:scale-125" src="/img/dummy/slika3.jpeg" alt="Image Description"></img>
			        <div class="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
			          <h3 class="text-base leading-normal font-semibold my-1 text-white">Citroen</h3>
			          <small class="d-block">Graphic</small>
			        </div>
			      </a>
			    </div>
			  </figure>

			  <figure class="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
			    <div class="relative overflow-hidden cursor-pointer mb-6">
			      <a role='button' data-gallery="gallery1" data-glightbox="title: My title; description:  This is a wider card with supporting text below as a natural lead-in to additional content" class="glightbox3">
			        <img class="block w-full h-auto transform duration-500 hover:scale-125" src="/img/dummy/slika4.jpeg" alt="Image Description"></img>
			        <div class="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
			          <h3 class="text-base leading-normal font-semibold my-1 text-white">Citroen</h3>
			          <small class="d-block">Branding</small>
			        </div>
			      </a>
			    </div>
			  </figure>

			  <figure class="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
			    <div class="relative overflow-hidden cursor-pointer mb-6">
			      <a role='button' data-gallery="gallery1" data-glightbox="title: My title; description:  This is a wider card with supporting text below as a natural lead-in to additional content" class="glightbox3">
			        <img class="block w-full h-auto transform duration-500 hover:scale-125" src="/img/dummy/slika5.jpeg" alt="Image Description"></img>
			        <div class="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
			          <h3 class="text-base leading-normal font-semibold my-1 text-white">Citroen</h3>
			          <small class="d-block">Web</small>
			        </div>
			      </a>
			    </div>
			  </figure>

			  <figure class="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp" data-wow-duration="1s">
			    <div class="relative overflow-hidden cursor-pointer mb-6">
			      <a role='button' data-gallery="gallery1" data-glightbox="title: Graphic Design; description: This is a wider card with supporting text below as a natural lead-in to additional content" class="glightbox3">
			        <img class="block w-full h-auto transform duration-500 hover:scale-125" src="/img/dummy/slika6.jpeg" alt="Image Description"></img>
			        <div class="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
			          <h3 class="text-base leading-normal font-semibold my-1 text-white">Citroen</h3>
			          <small class="d-block">Graphic</small>
			        </div>
			      </a>
			    </div>
			  </figure>

			  <figure class="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
			    <div class="relative overflow-hidden cursor-pointer mb-6">
			      <a role='button' data-gallery="gallery1" data-glightbox="title: Logo Design; description: This is a wider card with supporting text below as a natural lead-in to additional content" class="glightbox3">
			        <img class="block w-full h-auto transform duration-500 hover:scale-125" src="/img/dummy/slika7.jpeg" alt="Image Description"></img>
			        <div class="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
			          <h3 class="text-base leading-normal font-semibold my-1 text-white">Citroen</h3>
			          <small class="d-block">Branding</small>
			        </div>
			      </a>
			    </div>
			  </figure>

			  <figure class="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
			    <div class="relative overflow-hidden cursor-pointer mb-6">
			      <a role='button' data-gallery="gallery1" data-glightbox="title: Web Development; description: This is a wider card with supporting text below as a natural lead-in to additional content" class="glightbox3">
			        <img class="block w-full h-auto transform duration-500 hover:scale-125" src="/img/dummy/slika8.jpeg" alt="Image Description"></img>
			        <div class="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
			          <h3 class="text-base leading-normal font-semibold my-1 text-white">Citroen</h3>
			          <small class="d-block">Web</small>
			        </div>
			      </a>
			    </div>
			  </figure>

			  <figure class="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
			    <div class="relative overflow-hidden cursor-pointer mb-6">
			      <a hrole='button' data-gallery="gallery1" data-glightbox="title: Graphic Design; description: This is a wider card with supporting text below as a natural lead-in to additional content" class="glightbox3">
			        <img class="block w-full h-auto transform duration-500 hover:scale-125" src="/img/dummy/slika9.jpeg" alt="Image Description"></img>
			        <div class="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
			          <h3 class="text-base leading-normal font-semibold my-1 text-white">Citroen</h3>
			          <small class="d-block">Graphic</small>
			        </div>
			      </a>
			    </div>
			  </figure>

			  <figure class="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
			    <div class="relative overflow-hidden cursor-pointer mb-6">
			      <a role='button' data-gallery="gallery1" data-glightbox="title: App Design; description: This is a wider card with supporting text below as a natural lead-in to additional content" class="glightbox3">
			        <img class="block w-full h-auto transform duration-500 hover:scale-125" src="/img/dummy/slika10.jpeg" alt="Image Description"></img>
			        <div class="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
			          <h3 class="text-base leading-normal font-semibold my-1 text-white">Citroen</h3>
			          <small class="d-block">App</small>
			        </div>
			      </a>
			    </div>
			  </figure>
			</div>
		</div>
              </div>

            </div>
          </div>

        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'index', 'footer']),
  },
})