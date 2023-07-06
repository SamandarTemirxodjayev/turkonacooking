import React from 'react'

const SixthLayer = () => {
  return (
    <div className='font-verdana flex flex-col form max-h-[900px] justify-center items-center py-20 lg:px-0 xs:px-6'>
        <form className=''>
            <h1 className='bg-white w-[100%] flex justify-center xs:py-[10px] lg:py-[20px] lg:text-lg'>Send me message</h1>
            <input type="email" placeholder='Email' className='lg:mt-28 xs:mt-10 font-extrabold w-[100%] lg:p-10 xs:p-5 '/>
            <textarea placeholder='Your message' className='mt-6 font-extrabold w-[100%] lg:p-10 xs:p-4 py-4 h-44 '></textarea>
            <button className='w-[100%] bg-secondary lg:py-5 xs:py-2 mt-10 lg:text-xl font-extrabold text-white tracking-widest '>Send message</button>
        </form>
    </div>
  )
}

export default SixthLayer