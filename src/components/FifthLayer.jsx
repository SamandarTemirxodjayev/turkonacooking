import React from 'react'

const FifthLayer = () => {
  return (
    <div className='pb-28 font-verdana flex flex-col gap-4 justify-center items-center bg-white'>
      <h1 className="font-verdana text-[32px] py-8">Pricing</h1>
      <div className='grid lg:grid-cols-3 lg:px-72 xs:px-6   gap-14 items-center place-items-center'>
      <div className='flex flex-col gap-8 rounded-[40px] p-10 shadow-card text-[22px] font-extrabold'>
          <h1 className='text-[22px] font-extrabold'>MINIMUM</h1>
          <h1 className='text-secondary'>$ 200</h1>
          <p className='text-[13px] font-normal'>Perfect for small sessions and personal video shoots with and many purposes</p>
          <div className='flex flex-col gap-3 text-[15px] font-normal'>
            <h1 className='checkbox'>1-hours shoot</h1>
            <h1 className='checkbox'>30 second videos</h1>
            <h1 className='checkbox'>1 revisions</h1>
            <h1 className='checkbox'>Free retouch</h1>
            <button type="submit" className='font-extrabold mt-2 tracking-wide shrink-0 p-3 hover:bg-[#f72585]  border-2 border-[#F72585] text-[#f72585] hover:text-white font-verdana not-italic text-[15px]'>Buy now</button>
            </div>
        </div>
        <div className='flex flex-col gap-8 rounded-[40px] p-10 shadow-card text-[22px] font-extrabold'>
          <h1 className='text-[22px] font-extrabold'>STANDARD</h1>
          <h1 className='text-secondary'>$ 500</h1>
          <p className='text-[13px] font-normal'>Perfect for small sessions and personal video shoots with and many purposes</p>
          <div className='flex flex-col gap-3 text-[15px] font-normal'>
            <h1 className='checkbox'>2-hours shoot</h1>
            <h1 className='checkbox'>50 second videos</h1>
            <h1 className='checkbox'>3 revisions</h1>
            <h1 className='checkbox'>Free retouch</h1>
            <button type="submit" className='font-extrabold mt-2 tracking-wide shrink-0 p-3 hover:bg-[#f72585]  border-2 border-[#F72585] text-[#f72585] hover:text-white font-verdana not-italic text-[15px]'>Buy now</button>
            </div>
        </div>
        <div className='flex flex-col gap-8 rounded-[40px] p-10 shadow-card text-[22px] font-extrabold'>
          <h1 className='text-[22px] font-extrabold'>PREMIUM</h1>
          <h1 className='text-secondary'>$ 900</h1>
          <p className='text-[13px] font-normal'>Perfect for small sessions and personal video shoots with and many purposes</p>
          <div className='flex flex-col gap-3 text-[15px] font-normal'>
            <h1 className='checkbox'>1day shoot</h1>
            <h1 className='checkbox'>1 minute videos</h1>
            <h1 className='checkbox'>5 revisions</h1>
            <h1 className='checkbox'>Free retouch</h1>
            <button type="submit" className='font-extrabold mt-2 tracking-wide shrink-0 p-3 hover:bg-[#f72585]  border-2 border-[#F72585] text-[#f72585] hover:text-white font-verdana not-italic text-[15px]'>Buy now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FifthLayer