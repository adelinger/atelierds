const { URL } = process.env;

export async function loadCars() {
      const res = await fetch(URL)
      const data = await res.json()

      return data
  
  }

  export async function getSingleCar(id) {
    const res = await fetch(URL+'/'+id)
    const data = await res.json()

    return data

}