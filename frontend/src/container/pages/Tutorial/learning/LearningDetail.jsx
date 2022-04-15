import React  from 'react'
import LearningBar from './component/major/LearningBar'
import { Navbar } from '../../../component/major/Navbar'
import Leftbar from './component/major/Leftbar'
import LearningContent from './component/major/LearningContent'
import Tab from './component/major/Tab'

import image from '../../../asset/Images/dummy-learning.jpg'
import profile from '../../../asset/Images/profile.png'

function LearningDetail() {
   return (
      <>
            <Navbar/>
            <LearningBar/>
            <div className='flex flex-col gap-10 letter_spacing_1 px-5 md:px-16 bg-white text-black dark:text-[#b4b3b3] dark:bg-[#100e17] duration-200'>
               <div className='flex justify-between lg:gap-20 w-full pt-12'>
                  <div className='hidden xl:block w-1/6'><Leftbar/></div>
                  <div className='flex flex-col gap-12 w-full lg:w-8/12 px-5'>
                     <div className='flex flex-col gap-10'>
                        <p className='inter-600 text_31'>Fundamental of Internet</p>
                        <img src={image} alt="" width="400" className='rounded-md' />
                     </div>
                     <Tab/>
                  </div>
                  <div className='hidden lg:block w-1/4 sticky top-10'><LearningContent/></div>
               </div>
               <div className='flex justify-start xl:justify-center'>
                  <div className='flex flex-col w-full lg:w-7/12 px-5 xl:px-0'>
                     <p className='inter-600 text_25 my-10'>Reviews</p>
                     <div className='flex flex-col gap-5'>
                        {
                           Array.from({length: 6}).map((_, i) => (
                              <div class="flex">
                                 <div class="flex-shrink-0">
                                    <img src={profile} alt="" width="35" className='mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10'/>
                                 </div>
                                 <div class="flex flex-col flex-1 gap-5 px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                    <div className='flex items-center justify-between'>
                                       <div className='flex items-center gap-5'>
                                          <p className='inter-600'>Raphael Yu</p>
                                       </div>
                                       <p className='inter-600 text_14 secondary_text'>2 months ago</p>
                                    </div>
                                    <p className='flex items-end inter text_14 tracking-wider leading-6 bg_gray2 p-3 rounded-tl-none rounded-md'>The Internet (or internet) is the global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices. It is a network of networks that consists of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies.</p>
                                 </div>
                              </div>
                           ))
                        }
                     </div>
                  </div>
               </div>
            </div>
      </>
   )
}

export default LearningDetail