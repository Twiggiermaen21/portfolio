import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div>
            <div>
                <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
                <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                    Hi! I'm -----------<image src={assets.hand_icon} alt='' className='w-6' />
                </h3>

                <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'> frontend web developer based in -----  </h1>
                <p className='max-w-2xl mx-auto font-Ovo'>  im a front end dsadaskd akd aksdaskd aksdaskd ak dkasj dkasj kdaksd
                    dsakdokdao kdoa skdoask doask daoskd o
                </p>
                <div>
                    <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'> contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>
                    <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'> my resume <Image src={assets.download_icon} alt='' className='w-4' /></a>
                </div>


            </div>


        </div>
    )
}

export default Header