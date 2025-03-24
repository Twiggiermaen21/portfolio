import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
const About = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='about' className='w-full px-[12%]  py-10 scroll-mt-20 '>
            {/* w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 */}
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>About me</motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}

                className='flex w-full mr-auto  flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}

                    className='w-64 sm:w-80 rounded-3xl max-w-one'>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}

                    className=' grid grid-rows-3-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'>
                    <p className='mb-10 mx-auto max-w-2xl font-Ovo'>I continuously develop my skills in HTML, CSS, and JavaScript,
                        as well as backend technologies such as PHP. I enjoy working on projects that combine aesthetics with
                        functionality, paying attention to every detail.
                        I am also interested in electronics – I create programs for microcontrollers in C/C++, exploring the
                        world of embedded systems. Additionally, I develop mobile applications in React Native, adapting them to
                        various platforms and devices. </p>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}

                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li

                                whileHover={{ scale: 1.05 }}

                                key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                             hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.3, delay: 0.5 }}
                        className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</motion.h4>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                        className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <motion.li
                                whileInView={{ scake: 1.1 }}

                                key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border
                             border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 '>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />

                            </motion.li>
                        ))}
                    </motion.ul>

                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About