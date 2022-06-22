import axios from "axios";

export default class ApiService {
  constructor() {
    this.api_token = null;
    this.client = null;
   this.api_url = "https://localhost:5001/api/ateliercars";
  }
  init = () => {
    // this.api_token = getCookie("ACCESS_TOKEN");
    this.api_token = "";
    let headers = {
      Accept: "Content-Type: multipart"
    };
    if (this.api_token) {
      headers.Authorization = `Bearer ${
        this.api_token
      }`;
    }
    this.client = axios.create({baseURL: this.api_url, timeout: 31000, headers: headers});
    return this.client;
  };
  uploadPictures = (data) => {
    return this.init().post("/uploadFile", data);
  };
  getCars = (params) => {
    return this.init().get("", {params: params});
  };
  addNewCar = (data) => {
    return this.init().post("", data);
  };
  deleteCar = (id) => {
    return this.init().delete("/"+id  );
  };
}