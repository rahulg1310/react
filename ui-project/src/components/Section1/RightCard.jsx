import React from 'react'
import {ArrowRight} from 'lucide-react'

const RightCard = (props) => {
  return (
    <div className='h-full w-90 shrink-0 bg-black rounded-4xl relative overflow-hidden'>
      <img src={props.img} alt="" className='object-cover h-full opacity-80' />
      <div className='absolute top-0 left-0 h-full w-full px-12 py-8   flex flex-col justify-between'>
        <h1 className='text-2xl rounded-full bg-amber-50 h-13 w-13 flex justify-center items-center font-semibold' >{props.num}</h1>
        <div className=''>
            <p className='mb-18 text-white font-semibold leading-normal text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non commodi temporibus minima ea accusantium saepe totam rem? Atque, id reiciendis.</p>
            <div className='flex justify-between'>
                <button className='bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-sm'>{props.tag}</button>
                <button className='bg-blue-700 text-white px-3 py-2 rounded-full font-semibold'><ArrowRight size={22} /></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCard
