import React from 'react'
import Croc from './Croc'

const Spider = () => {
  return (
    <div className='min-h-screen flex flex-col gap-[50px] items-center justify-center bg-[#15171a] px-4 py-10'>
      
      {/* Heading */}
      <div className='flex flex-wrap items-center justify-center gap-[5px] text-white text-4xl sm:text-5xl font-bold text-center mb-10'>
        <h1>Our</h1>
        <h1 className='italic'>Expert</h1>
        <h1>Team</h1>
      </div>

      {/* Team Section */}
      <div className='w-full flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10'>
        <Croc
          images='https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/t1-1-1.jpg'
          text='Jimmy'
          text3='Roland'
          text2='Founder, Developer'
        />
        <Croc
          images='https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/t2-1-1.jpg'
          text='Jimmy'
          text3='Roland'
          text2='Founder, Developer'
        />
        <Croc
          images='https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/t4-1-1.jpg'
          text='Jimmy'
          text3='Roland'
          text2='Founder, Developer'
        />
        <Croc
          images='https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/t3-1-1.jpg'
          text='Jimmy'
          text3='Roland'
          text2='Founder, Developer'
        />
      </div>
    </div>
  )
}

export default Spider
