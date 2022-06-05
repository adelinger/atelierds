import ApiService from "auth/service/ApiService";
import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import Alert from "components/Alerts/Alert";

export default function CardSettings({ auth }) {
    const { logout, user, error } = auth;

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
        "carPhotosPath": null
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
                                    className="content-between bg-lightBlue-500 active:bg-lightBlue-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
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
