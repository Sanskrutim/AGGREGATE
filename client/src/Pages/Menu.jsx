import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { selectArea } from '../features/AreaCalculatipnSlice'
import { setPH } from '../features/PhCalculationSlice';
import { setN , setP, setK} from '../features/NpkSlice';


const Menu = () => {
  const area = useSelector(selectArea)
    const [Ph, setPh] = useState()
    const [Nitrogen, setNitrogen] = useState()
    const [Phosphorus, setPhosphorus] = useState()
    const [Potassium,setPotassium]=useState()
    const navigate=useNavigate()
    const dispatch = useDispatch()

    const checkSuitability = (e) => {
      e.preventDefault();
      dispatch(setPH(Ph)) ;   
      navigate("/ph")
    };
    const cropsSuggestion = (e) => {
      e.preventDefault();
      dispatch(setN(Nitrogen));
      dispatch(setP(Phosphorus));
      dispatch(setK(Potassium));
      navigate("/npk")
    };
  return (
    <>
        <form className=' max-h-auto px-28 ' style={{paddingTop:"18px"}}>
        <br></br>
          
          <h2 className='flex justify-center'>Your Field Area: {area} Bigha ({(area*0.62).toFixed(2)} Acre)</h2>
          
          <br></br>
          
          <div className="mb-3">
            {/* <label htmlFor="exampleInputPassword1" className="form-label">Calculated Area</label>
            <input type="number" 
            className="form-control"
             id="area" 
             value={area}
             
             />
            <br></br> */}
            <label htmlFor="exampleInputPassword1" className="form-label">Check suitability of soil for crop(GIVE PH OF SOIL)</label>
            <input type="number" 
            className="form-control"
            id="ph" 
            value = {Ph}
            onChange={(e) => (setPh(e.target.value)) }
             
             />
          </div>
          <button type="submit" onClick={checkSuitability}  className="font-bold text-white mb-4 px-5 mt-2 py-2 transition ease-in-out delay-150 bg-orange-700 hover:bg-gray-600 duration-300 rounded-md">Check</button>
          
          <p className='pt-3'>OR</p>
          <div className="mb-4 ">
            <label htmlFor="exampleInputEmail1" className="form-label">Nitrogen(N)</label>
            <input type="number" 
            className="form-control"
            id="Nitrogen" 
            value = {Nitrogen}
            onChange={(e) => (setNitrogen(e.target.value)) }
             
             />
              
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Phosphorus(P)</label>
            <input type="number" 
            className="form-control"
            id="Phosphorus"
            value = {Phosphorus}
            onChange={(e) => (setPhosphorus(e.target.value)) } 
             
             />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">potassium(K)</label>
            <input type="number" 
            className="form-control"
            id="potassium"
            value = {Potassium}
            onChange={(e) => (setPotassium(e.target.value)) }
             
             />
          </div>

          <button type="submit" onClick={cropsSuggestion} className="font-bold text-white mb-20 mt-2 px-5 py-2 transition ease-in-out delay-150 bg-orange-700 hover:bg-gray-600 duration-300 rounded-md">Lets grow crop</button>
          
        </form>
    </>
  )
}

export default Menu 