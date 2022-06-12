import React from 'react';
import Navbar from 'components/Navbars/IndexNavbar';
import Footer from 'components/Footers/Footer';
import { getSingleCar, loadCars } from 'lib/apiCalls';

function viewCar({ carData }) {
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
              <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                  <img class="object-cover object-center rounded" alt="hero" src='/img/image_ds.jpg'></img>
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{carData.carModel + ' ' + carData.carMake}
                    <p className="hidden lg:inline-block">   </p>
                  </h1>
                  <p class="mb-8 leading-relaxed text-white ml-5">{carData.carDescription}</p>
                  <div class="flex justify-center">
                    <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                  </div>
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


export async function getStaticProps({ params }) {
  const carData = await getSingleCar(params.car);
  return {
    props: {
      carData,
    },
  };
}


export async function getStaticPaths() {
  const cars = await loadCars();

  // generate the paths
  const paths = cars.map(car => ({
    params: { car: car.atelierCarID.toString() }
  })
  );

  return {
    paths,
    fallback: true,
  }

}

