import React from 'react';


import fmlyImg from '../assets/family.png'
import phone from '../assets/phone.png'
import phone2 from '../assets/phone2.png'
import phone3 from '../assets/phone3.png'
const About =() =>{
    return(
        <div
        class="w-full flex flex-col justify-between bg-[url('/back2.jpg')] bg-cover"
        >
            <div name='about' className='grid md:grid-cols-2 max-w-[1240px] m-auto pr-4'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 pr-4'>
                    <img src={fmlyImg} width={400} height={380} alt="/"  />
                   
                </div>
                <div class="flex flex-col justify-center md:items-start w-full px-2 py-8 pr-4">
                    <h2 className='py-3 text-4xl md:text-4xl font-bold'>Mengapa Harus Punya Website Undangan Penikahan Online? </h2>

                    <div className='border py-8 rounded-xl my-2 shadow-md flex items-center'>
                    <div className='w-24 relative flex items-center'>
                       <img className='absolute' src={phone} alt="/" />
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold text-gray-800'>Mudah Dibagikan</h4>
                        <p>Hanya dengan link, undangan digital bisa dibagikan keseluruh kontak lengkap dengan nama tamu undangan</p>
                    </div>
                    </div>

                    <div className='border py-8 rounded-xl my-2 shadow-md flex items-center'>
                    <div className='w-24 relative flex items-center'>
                        <img className='absolute' src={phone2} alt="/"/>
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold text-gray-800'>Info & Fitur Lengkap</h4>
                        <p>Semua informasi ditampilkan dalam undangan dengan fitur peta lokasi, galeri pre wedding, countdown timer, hingga cerita cinta Anda</p>
                    </div>
                    </div>

                    <div className='border py-8 rounded-xl my-2 shadow-md flex items-center'>
                    <div className='w-24 relative flex items-center'>
                        <img className='absolute' src={phone3} alt="/"/>
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold text-gray-800'>Unik & Kekinian</h4>
                        <p>Di era serba digital seperti saat ini, website undangan bisa menjadi pilihan undangan yang unik dan menarik namun tetap fungsional</p>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About