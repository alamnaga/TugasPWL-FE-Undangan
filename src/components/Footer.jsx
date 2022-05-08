import { CheckIcon } from '@heroicons/react/outline';
import React from 'react';

const Footer = () =>{
    return(
        <div 
        class="w-full bg-pink-100 justify-between bg-[url('/footer.jpg')] bg-cover">
            <div className='max-w-[1240px] mx-auto px-2 py-8'>
                <h2 className='text-2xl font-bold text-center text-white'>Siap Wujudkan Undangan Impianmu?</h2>
                <div className="text-center">
                    <button className="px-4 py-4 sm:w-[20%] text-2xl rounded-lg bg-indigo-600 shadow-lg text-white my-4">Buat Sekarang</button>
                </div>
                </div>
                    <div className='text-center'>
                        <p>© 2022 nama. Made by lorem </p>
                    </div>
            </div>
     
    )
}
export default Footer;