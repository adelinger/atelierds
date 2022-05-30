// import { useState, useEffect } from 'react';
// const getCars = (url = 'https://localhost:5001/api/ateliercars', options = null) => {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch(url, options)
//       .then(res => res.json())
//       .then(data => setData(data));
//   }, [url, options]);
//   return {data}
// }
// export default getCars;

import axios from "axios";

export default class ApiService {
  constructor() {
    this.api_token = null;
    this.client = null;
    // this.api_url = process.env.API_ENDPOINT;
    this.api_url = "https://localhost:5001/api/ateliercars";
  }
  init = () => {
    // this.api_token = getCookie("ACCESS_TOKEN");
    this.api_token = "";
    let headers = {
      Accept: "application/json"
    };
    if (this.api_token) {
      headers.Authorization = `Bearer ${
        this.api_token
      }`;
    }
    this.client = axios.create({baseURL: this.api_url, timeout: 31000, headers: headers});
    return this.client;
  };
  getCars = (params) => {
    return this.init().get("", {params: params});
  };
  addNewUser = (data) => {
    return this.init().post("/users", data);
  };
  deleteCar = (id) => {
    return this.init().delete("/"+id, data);
  };
}