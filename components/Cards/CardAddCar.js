import ApiService from "auth/service/ApiService";
import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import Alert from "components/Alerts/Alert";
import { maxHeight } from "tailwindcss/defaultTheme";

export default function CardSettings({ auth }) {
    const { user } = auth;

    const [images, setImages] = useState([]);
    const [createObjectURL, setCreateObjectURL] = useState([]);

    const [carModel, setCarModel] = useState();
    const [carMake, setCarMake] = useState();
    const [carYear, setCarYear] = useState();
    const [carColor, setCarColor] = useState();
    const [carEnginePower, setCarEnginePower] = useState();
    const [carEngineType, setCarEngineType] = useState();
    const [carDescription, setCarDescription] = useState();
    const [carPrice, setCarPrice] = useState();
    const [isSuccess, setIsSuccess] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showloader, setShowLoader] = useState(false);
    const [carKilometers, setCarkilometers] = useState(false);

    const carObject = {
        "atelierCarStatus": {
            "atelierCarStatusID": 1
        },
        "carModel": carModel,
        "carMake": carMake,
        "carYear": parseInt(carYear),
        "carColor": carColor,
        "carEnginePower": carEnginePower,
        "carEngineType": carEngineType,
        "carDescription": carDescription,
        "carPrice": parseFloat(carPrice),
        "addedByUser": user.email,
        "carProfilePhotoPath": null,
        "carPhotosPath": null,
        "carKilometers": carKilometers
    }

    const api = new ApiService();


    const handleSubmit = (e) => {
        e.preventDefault();
        setShowLoader(true);
        setShowAlert(false);

        api
            .addNewCar(carObject)
            .then(data => {
                handleApiResponse(true);
            })
            .catch((error) => {
                handleApiResponse(false);
            });
    }

    function handleApiResponse(Success) {
        setIsSuccess(Success);
        setShowLoader(false);
        setShowAlert(true);
    }

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files;

            let files = [];
            for (let file of event.target.files) {
                files.push(URL.createObjectURL(file));
            }
            setImages(files);

        }
    };

    const uploadToServer = async (event) => {
        const body = new FormData();
        body.append("file", images);
        const response = await fetch("/api/file", {
            method: "POST",
            body
        });
    };

    const handleImageOnClick = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Add new car</h6>
                    </div>

                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={handleSubmit}>
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Car information
                        </h6>

                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Car model
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Type car model here"
                                        onChange={e => setCarModel(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Car Make
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Type car make here"
                                        onChange={e => setCarMake(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Car year
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        min="1800"
                                        max="2050"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Type car year here"
                                        onChange={e => setCarYear(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Car color
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Type car color here"
                                        onChange={e => setCarColor(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Engine power (ps)
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Type car engine power here"
                                        onChange={e => setCarEnginePower(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    >
                                        Engine type
                                    </label>
                                    <select onChange={e => setCarEngineType(e.target.value)}
                                        class="form-select appearance-noneblock w-full px-3 py-1.5 text-base font-normal text-gray-700
                                         bg-white bg-clip-padding bg-no-repeat
                                         border border-solid border-gray-300
                                         rounded
                                         transition
                                         ease-in-out
                                         m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        aria-label="select-engine-type">
                                        <option value="diesel">Diesel</option>
                                        <option value="bensin">Bensin</option>
                                        <option value="electric">Electric</option>
                                        <option value="hybrid">Hybrid</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    >
                                        Price (€)

                                    </label>
                                    <input
                                        required
                                        type="number"
                                        min="0.00"
                                        step="0.01"

                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Type the price here"

                                        onChange={e => setCarPrice(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    >
                                        Kilometers

                                    </label>
                                    <input
                                        required
                                        type="number"
                                        min="0.00"
                                        step="0.01"

                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Type the kilometers here"

                                        onChange={e => setCarkilometers(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            {Object.keys(images) == 0 && <h4 className="float-left">Select Images</h4>

                            }

<div className="container mx-auto ">
                
<div class="grid grid-cols-1 md:grid-cols-6 gap-6">
             {images.map ((item, key) => 
                     <div className="mt-5 mb-5" style={{ width: "200px", height: "200px" }} >
                       <a href="#" onClick={handleImageOnClick}>
                                        <img src={item} class="h-48 w-96 mr-5 mb-1" style={{ width: "100%", height: "85%" }}></img>
                                    </a>
                               
<button class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
   >
<i class="fa-solid fa-x"></i> Delete
</button>
                       </div>
                     
                   
                    )}
                 
              </div>
  
                </div>



                            <div>   
                                <div>
                                    <input name="myImage" onChange={uploadToClient}
                                        class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 
focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                        type="file" multiple ></input>
                                </div>
                                <div class="flex justify-center items-center w-full mt-5">
                                    <button
                                        className="content-between text-center bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                        type="submit"
                                        onClick={uploadToServer}
                                    >
                                        Send to server
                                    </button>
                                </div>


                            </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-blueGray-300" />

                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Description
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Car description
                                    </label>
                                    <textarea
                                        required
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        rows="4"
                                        placeholder="Enter the car description here."
                                        onChange={e => setCarDescription(e.target.value)}
                                    ></textarea>
                                </div>
                            </div>
                        </div>


                        <div class="flex justify-between mt-5">
                            <div class="flex px-2"></div>
                            <div class="flex px-2 ">
                                <button
                                    className="content-between bg-lightBlue-500 active:bg-lightBlue-700 hover:shadow-lg text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="submit    "
                                //onClick={handleSubmit}
                                >
                                    Add new car
                                </button></div>
                            <div class="flex px-2 "></div>

                        </div>
                        {showloader &&
                            <div className=" mx-auto max-w-sm text-center relative mt-5">
                                <CircularProgress />

                            </div>
                        }
                        {showAlert &&
                            <div className="mt-5">
                                <Alert color={isSuccess ? 'emerald' : 'red'}></Alert>
                            </div>

                        }
                    </form>
                </div>
            </div>
        </>
    );
}
