import React from 'react';


import fmlyImg from '../assets/family2.png'

const About =() =>{
    return(
        <div
        class="w-full flex flex-col justify-between bg-[url('/back3.jpg')] bg-cover"
        >
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto pr-4 lg:grid-cols-3'>
                <div class="flex flex-col justify-center md:items-start w-full px-2 py-8 pr-4">
                    <h2 className='py-3 text-3xl md:text-2xl font-bold'>Cara Membuat Undangan Kamu</h2>

                    <div grid grid-cols-1 divide-y>
                        <div className='py-8 rounded-xl shadow-md pl-3'>
                            <h4 className='text-2xl font-bold text-gray-800'>1. Register</h4>
                            <p>Isi Info Acara & Profile dan juga upload foto/gallery. </p>
                        </div>
                        <div className='py-8 rounded-xl shadow-md pl-3'>
                            <h4 className='text-2xl font-bold text-gray-800'>2. Isi Informasi</h4>
                            <p>Semua informasi ditampilkan dalam undangan dengan fitur peta lokasi, galeri pre wedding, countdown timer, hingga cerita cinta Anda</p>
                        </div>
                        <div className='py-8 rounded-xl shadow-md pl-3'>
                            <h4 className='text-2xl font-bold text-gray-800'>3. Pilih Tema</h4>
                            <p>Pilih Tema sesuai selera </p>
                        </div>
                        <div className='py-8 rounded-xl shadow-md pl-3'>
                            <h4 className='text-2xl font-bold text-gray-800'>4. Share</h4>
                            <p>Website undangan pernikahan online sudah siap dibagikan ke seluruh tamu undangan </p>
                        </div>
                    </div>
                   
                </div>
                <div className='ml-8 flex flex-col justify-center md:items-start w-full px-2 py-8 pl-8'>
                    <h4 className='ml-8 text-2xl font-bold text-gray-800 pl-8'>Hanya 4 Langkah</h4>
                    <p className='ml-8 pl-8'>Cukup lakukan 4 langkah untuk buat website undangan pernikahanmu sendiri. Wujudkan undangan pernikahan impian Anda bersama kami.</p>
                </div>
                <div className='flex flex-col justify-center md:items-start w-5/6 px-2 py-8 pl-8'>
                    <img src={fmlyImg} width={440} height={410} alt="/"  />
                </div>
            </div>
        </div>
    )
}

export default About