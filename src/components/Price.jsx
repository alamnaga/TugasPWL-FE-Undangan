import { CheckIcon } from "@heroicons/react/outline";
import React from "react";

const Price = () =>{
    return(
        <div name='pricing' className="w-full">
                <div className="py-2 text-3xl md:text-2xl font-bold">
                    <h2 className="m-8 text-4xl">Tentukan Paketmu Sekarang Juga!</h2>
                </div>

                <div className="grid md:grid-cols-3">
                    <div className="border-black m-8 p-8 rounded-xl shadow-2xl">
                        <div className="text-center">
                            <span className="uppercase px-3 py-2 bg-indigo-600 text-white rounded-md text-2xl">Basic</span>
                            <div className="py-2">
                                <p className="text-4xl text-gray-700">IDR 50.000</p>
                            </div>
                            <p className="text-2xl">Fitur</p>
                        </div>
                        
                        <div className="text-2xl relative">
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-400"/>Lorem ipsum dolor.</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-400"/>Lorem ipsum dolor.</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-400"/>Lorem ipsum dolor.</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-400"/>Lorem ipsum dolor.</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-400"/>Lorem ipsum dolor.</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-400"/>Lorem ipsum dolor.</p>
                        </div>
                    </div>

                    <div className="border-black m-8 p-8 rounded-xl shadow-2xl">
                        <div className="text-center">
                            <span className="uppercase px-3 py-2 bg-pink-400 text-gray-800 rounded-md text-2xl">Premium</span>
                            <div className="py-2">
                                <p className="text-4xl text-gray-700">IDR 75.000</p>
                            </div>
                            <p className="text-2xl">Fitur</p>
                        </div>
                        
                        <div className="text-2xl relative">
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-400"/>Lorem ipsum dolor.</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-400"/>Lorem ipsum dolor.</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-400"/>Lorem ipsum dolor.</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-400"/>Lorem ipsum dolor.</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-400"/>Lorem ipsum dolor.</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-400"/>Lorem ipsum dolor.</p>
                        </div>
                    </div>

                    <div className="border-black m-8 p-8 rounded-xl shadow-2xl">
                        <div className="text-center">
                            <span className="uppercase px-3 py-2 bg-indigo-600 text-white rounded-md text-2xl">Ekslusif</span>
                            <div className="py-2">
                                <p className="text-4xl text-gray-700">IDR 100.000</p>
                            </div>
                            <p className="text-2xl">Fitur</p>
                        </div>
                        
                        <div className="text-2xl relative">
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-400"/>Lorem ipsum dolor.</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-400"/>Lorem ipsum dolor.</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-400"/>Lorem ipsum dolor.</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-400"/>Lorem ipsum dolor.</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-400"/>Lorem ipsum dolor.</p>
                            <p className="flex py-4"><CheckIcon className="w-8 mr-5 text-green-400"/>Lorem ipsum dolor.</p>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default Price