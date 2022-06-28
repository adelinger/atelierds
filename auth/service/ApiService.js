import axios from "axios";

export default class ApiService {
  constructor() {
    this.api_token = null;
    this.client = null;
    // this.api_url = process.env.API_ENDPOINT;
    this.api_url = process.env.NEXT_PUBLIC_URL;
  }
  init = () => {
    // this.api_token = getCookie("ACCESS_TOKEN");
    this.api_token = "";
    let headers = {
      Accept: "application/json",
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
  addNewCar = (data) => {
    return this.init().post("/add", data);
  };
  deleteCar = (id) => {
    return this.init().delete("/"+id  );
  };
}