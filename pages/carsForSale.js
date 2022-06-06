import React, { useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

// components

import Navbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { loadCars } from "lib/apiCalls";
import ItemListCard from "components/Cards/ItemListCard";

export default function carsForSale({cars}) {


  const { t } = useTranslation('index');
  return (
    <>
      <Navbar/>
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
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    {t('Cars for sale')}
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Here you can see which cars do we have for sale at the moment.
                  </p>
                </div>
              </div>
              <div className="container mx-auto ">
                
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
           {cars.map (car => 
                   <div className="mt-5 mb-5" >
                     <ItemListCard car={car}></ItemListCard>
                     </div>
                   
                 
                  )}
               
            </div>

              </div>
              
            </div>
          </div>
        
          </div>

      </main>
      <Footer />
    </>
  );
}


export async function getStaticProps({locale}){
  const cars =  await loadCars();

  return {
      props: {
        cars: cars,
        ...await serverSideTranslations(locale, ['common', 'index']),
      }
  }
}
