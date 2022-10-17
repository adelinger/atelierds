import axios from "axios";
import { Cookies as ReactCookies } from 'react-cookie';

export default class ApiService {
  constructor() {
    this._cookies = new ReactCookies();
    this.api_token = null;
    this.client = null;
    //this.api_url = "https://localhost:5001/api/ateliercars";
    this.api_url = process.env.NEXT_PUBLIC_URL;
  }
  init = () => {
    this.api_token = this._cookies.get("auth-token");
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
  getCarsPublic = (pageSize, sortOrder) => {
    return this.init().get('/' + '?pageSize='+pageSize +'&sortOrder=' + sortOrder);
  };
  getCars = (params) => {
    return this.init().get("get-private", {params: params});
  };
  addNewCar = (data) => {
    const res = this.init().post("/add", data);
    fetch("/api/revalidate?path='/cars'&secret=fDm8n8AuCG0xiYfFf6fY");

    return res;
  };
  updateCar = (data) => {
    const res = this.init().put("/updateCar", data);
    fetch("/api/revalidate?path='/cars'&secret=fDm8n8AuCG0xiYfFf6fY");
    return res;
  };
  deleteCar = (id) => {
    return this.init().delete("/"+id);
  };
  deleteFile = (fileName) => {
    return this.init().delete("/DeleteFile/"+ fileName);
  };
  updateCarStatus = (carId, newCarStatusId) => {
    return this.init().put("/UpdateCarStatus?carId="+carId+"&newCarStatusId="+newCarStatusId);
  };
  sendEmail = (emailData) => {
    return this.init().post('/sendEmail', emailData);
  }
  checkAuth = () => {
    return this.init().post('auth');
  }
  getImages = (folderName) => {
    return this.init().post('get-images', folderName)
  }
}