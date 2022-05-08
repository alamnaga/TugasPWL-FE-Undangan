import React from 'react';

import bgImg from '../assets/weeding.png'
const Frame1 = () => {
    return(
        <div name='home' 
            class="w-full h-screen flex flex-col justify-between bg-[url('/back.jpg')] bg-cover">
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto pr-4'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 pr-4'>
                    <h1 className='py-3 text-5xl md:text-5xl font-bold'>Website Undangan Pernikahan Online </h1>
                    <p>Undang orang-orang terdekat dalam momen kebahagiaan pernikahan Anda dengan cara yang unik dan menarik. Coba sekarang gratis </p>
                    <button className='px-4 py-4 sm:w-[65%] rounded-lg bg-indigo-600 shadow-lg text-white my-4'>Buat Undanganmu Sekarang</button>
                </div>
                <div className='flex flex-col justify-center'>
                    <img className='w-full' src={bgImg} alt="/" />
                </div>
            </div>

        </div>
    )
}

export default Frame1