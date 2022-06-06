import ApiService from "auth/service/ApiService";

export async function loadCars() {
      const res = await fetch('https://autotoni.hr/api/ateliercars')
      const data = await res.json()

      return data
  
  }