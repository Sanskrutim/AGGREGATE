import React, { useState } from 'react'
import image from "../assets/Input.jpg"
import { useNavigate } from 'react-router-dom';
import { setArea } from '../features/AreaCalculatipnSlice';
import { useDispatch } from 'react-redux';



const InputArea = () => {
    const [length, setLength] = useState()
    const [width, setWidth] = useState()
    const [givenArea,setGivenArea]=useState()
    const dispatch = useDispatch()
    const navigate=useNavigate()
    

    const calculateArea = (e) => {
        e.preventDefault();
        const Area = parseFloat(length) * parseFloat(width)*0.0003;
        dispatch(setArea(Area.toFixed(2)))
        navigate("/menu")
        
    };
    
    const handleButtonClick = (e) => {
        e.preventDefault();
        dispatch(setArea(givenArea));
        navigate("/menu")
  };
  return (

    <div className='flex flex-row'>
    <div className="basis-1/2 left">

      <h2 className="text-4xl px-28 pt-24 font-bold text-grey-300">Calculate Area</h2>
        <form className=' max-h-auto px-28 ' style={{paddingTop:"18px"}}>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">Length (L) in meter</label>
            <input type="number"
             className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            value={length} onChange={(e) => setLength(e.target.value)}
             />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Width (W) in meter</label>
            <input type="number" 
            className="form-control"
             id="exampleInputPassword1" 
             value={width} onChange={(e) => setWidth(e.target.value)}
             />
          </div>
          <button type="submit" onClick={calculateArea} className="font-bold text-white mb-4 px-5 mt-2 py-2 transition ease-in-out delay-150 bg-orange-700 hover:bg-gray-600 duration-300 rounded-md">Calculate Area</button>
          
          <p className='pt-3'>OR</p>
          <div className="mb-4 ">
            <label htmlFor="exampleInputEmail1" className="form-label">Field Area(Bigha)</label>
            <input type="number" 
            className="form-control"
             id="exampleInputPassword1" 
             value={givenArea} 
             onChange={(e) => setGivenArea(e.target.value)}
             />
              
          </div>
          <button type="submit" onClick={handleButtonClick} className="font-bold text-white mb-20 mt-2 px-5 py-2 transition ease-in-out delay-150 bg-orange-700 hover:bg-gray-600 duration-300 rounded-md">Good To Go</button>
          
        </form>
    </div>
    <div className="right  basis-1/2">
    <img src={image} className="img" alt="" />
    </div>

    </div>
  )
}

export default InputArea