import { CheckIcon } from "@heroicons/react/outline";
import React from "react";

import template1 from '../assets/template1.png'
import template2 from '../assets/template2.png'
import template3 from '../assets/template3.png'
import template4 from '../assets/template4.png'
const Template = () =>{
    return(
        <div name='tema' className="w-full">
                <div className="py-2 text-3xl md:text-2xl font-bold">
                    <h2 className="m-8 text-4xl">Pilih Template</h2>
                </div>

                <div className="grid md:grid-cols-4">
                    <div className="border-black m-8 p-8 rounded-xl shadow-2xl">
                        <div className="flex flex-col justify-center md:items-start">
                        <img src={template1} width={440} height={410} alt="/"  />
                        </div>
                    </div>

                    <div className="border-black m-8 p-8 rounded-xl shadow-2xl">
                        <div className="flex flex-col justify-center md:items-start">
                        <img src={template3} width={440} height={410} alt="/"  />
                        </div>
                    </div>

                    <div className="border-black m-8 p-8 rounded-xl shadow-2xl">
                        <div className="flex flex-col justify-center md:items-start">
                        <img src={template2} width={440} height={410} alt="/"  />
                        </div>
                    </div>

                    <div className="border-black m-8 p-8 rounded-xl shadow-2xl">
                        <div className="flex flex-col justify-center md:items-start">
                        <img src={template4} width={440} height={410} alt="/"  />
                        </div>
                    </div>

                </div>
                <div className="text-center">
                    <button className="px-4 py-4 sm:w-[20%] text-2xl rounded-lg bg-indigo-600 shadow-lg text-white my-4">Tema Lainnya</button>
                </div>
            </div>
       
    )
}

export default Template