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

export async function uploadeImages (body) {
  const publicURL = process.env.NEXT_PUBLIC_URL
  const response = await fetch(publicURL + "/uploadFile", {
            method: "POST",
            body
        });

    if(!response.ok) throw new Error(response.status);
    else return response;
}


export async function addNewCar (data) {
  const publicURL = process.env.NEXT_PUBLIC_URL
  const response = await fetch(publicURL, {
            method: "POST",
            headers: {
             // 'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
              'Content-Type': 'application/json',
            },
            data
        });

    if(!response.ok) throw new Error(response.status);
    else return response;
}