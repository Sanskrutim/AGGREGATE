import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Homepage.css"



const HomePage = () => {
  return (
    <div className='d-f'>
        <div className='home'>
            <h1 className="text-4xl px-28 pt-24 font-bold text-white">KNOW MORE ABOUT <br></br>FARMING</h1>
            <p className='text-xl px-28 pt-3 pb-9 font-light text-wrap text-white'>Farming is a vital sector that involves growing crops and raising livestock for food and other products.
            <br></br>It is a complex and dynamic industry that has evolved over the centuries,with modern farmers using <br></br>advanced technologies and practices to increase yields and efficiency.</p>
            <button  className='font-bold text-white mb-32 ml-28 px-9 py-3 transition ease-in-out delay-150 bg-orange-700 hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 duration-300 rounded-lg'>LEARN MORE</button>
            
        </div>
        
        

    </div>
  )
}

export default HomePage