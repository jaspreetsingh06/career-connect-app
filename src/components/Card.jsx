import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div>
      <Link to={`/jobs/${props.id}`}>
       <div className='h-80 w-65 bg-white shadow-2xl  px-5 py-5 flex flex-col justify-between rounded-4xl hover:scale-105 transform'>
        <div className="top flex justify-between">
          <img className='w-12 h-12 object-cover rounded-full' src={props.logo} alt="" />
          <button className='bg-gray-400 px-5 text-gray-900 font-semibold rounded-2xl text-sm cursor-pointer'>Save</button>
        </div>

        <div className="middle pb-10">
          <h3 className='font-semibold'>{props.company} <span className='text-xs'>{props.time}</span>  </h3>
          <h2 className='text-xl font-semibold pb-1'>{props.post}</h2>
          <div className='flex  gap-1'>
            <button  className='bg-gray-400 px-2 py-1 text-gray-900  rounded text-[12px] cursor-pointer'  >{props.tag1}</button>
            <button  className='bg-gray-400 px-2 py-1 text-gray-900 rounded text-[12px] cursor-pointer'  >{props.tag2}</button>
          </div>
        </div>

        <div className="bottom flex justify-between ">
          <div>
            <h2 className='font-semibold text-sm whitespace-nowrap'>{props.pay}</h2>
            <h4 className='text-[12px] text-gray-900'>{props.location}</h4>
          </div>

          <button className='bg-black text-white text-sm rounded-xl px-3 font-semibold cursor-pointer'>Apply Now</button>
        </div>
       </div>
      </Link>
     
    </div>
  )
}

export default Card