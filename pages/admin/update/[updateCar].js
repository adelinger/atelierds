import Admin from "layouts/Admin";
import CardAddCar from 'components/Cards/CardAddCar';
import { getSingleCar, loadCars } from "lib/apiCalls";
import { withProtected } from 'auth/hook/route';
import { useRouter } from "next/router";

function updateCar({carData, auth}) {
    

    return ( 
        <Admin>
        <div className="flex flex-wrap">
            <div className="w-full ">
                <CardAddCar auth={auth} carData={carData} />
            </div>
         
        </div>
    </Admin>
     );
}

export default withProtected(updateCar);


export async function getStaticProps({ params }) {
    const carData = await getSingleCar(params.updateCar);

    return {
      props: {
        carData
      },
    };
  }

  export async function getStaticPaths() {
    const cars = await loadCars();
  
    const paths = cars.map(car => ({
      params: { updateCar: car.atelierCarID.toString() }
    })
    );
  
    return {
      paths,
      fallback: true,
    }
  
  }


