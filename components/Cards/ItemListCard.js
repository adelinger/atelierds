import { Link } from "@mui/material";
import { auto } from "@popperjs/core";
import { useTranslation } from "next-i18next";
import React from "react";
import { height } from "tailwindcss/defaultTheme";

// components

export default function ItemListCard({car, serverUrl}) {

  const { t } = useTranslation('index');

  return (
    <>
    
    <main>
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" style={{}}>
    <div class="grid justify-items-center items-center -mt-1.5" style={{maxHeight:300, width:auto, minHeight:300}} >
      <a href={`cars/${encodeURIComponent(car.atelierCarID)}`} className=" ">
        <img class="rounded-t-lg" src={serverUrl + car.carPhotosPath + '/' + car.carProfilePhotoPath} alt={car.carMake + ' ' + car.carModel} />
    </a>
      </div>
    
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{car.carModel + ' ' + car.carMake}</h5>
        </a>
        <div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Year: {car.carYear} 
          <br>
          </br>
          Km: {car.carKilometers}
        </p>
       
        <Link href={`cars/${encodeURIComponent(car.atelierCarID)}`} class="mt-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
            Read more
            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
        <p className="float-right text-3x1 font-bold mt-7">{car.carPrice}€</p>
        </div>
        

        </div>
    </div>
    </main>
    </>
  );
}
