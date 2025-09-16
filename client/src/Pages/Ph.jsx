import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectPh } from '../features/PhCalculationSlice'
import { useNavigate } from 'react-router-dom'


const Ph = () => {
  const Ph = useSelector(selectPh)
  const navigate=useNavigate()
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('https://ph-api-qnl4.onrender.com/pH')
      .then(response => response.json())
      .then(Data => {
        setData(Data)
        applyFilters(Data)
      }
        
        
    )
      .catch(error => console.log(error));
  }, []);

  const applyFilters = (data) => {
    const filteredData = data.filter(item => {
        return (item.pH_range[0] <= Ph && item.pH_range[1] >Ph) 
        ;
        
    });

    setFilteredData(filteredData);
};

const navMenu = (e) => {
  e.preventDefault();
  
  navigate("/menu")
};
  return (
    <div className=' m-10'>
    
      <button type="submit" onClick={navMenu} className="font-bold text-white mt-2 px-5 py-2 transition ease-in-out delay-150 bg-orange-700 hover:bg-gray-600 duration-300 rounded-md">Search for another pH value</button>
       

      {filteredData.map(item => (
          
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full p-10 font-serif" key={item.id} >
            <h3 className=' flex justify-center text-amber-900 pb-5 font-bold'>Your pH value is : {Ph}</h3>
          
              
              <div >
              
                  <p className="" style={{fontSize: '24px'}}><b>Management Technique: </b>{item.management_techniques}</p>
                  <p className="" style={{fontSize: '24px'}}><b>Recommended Crops: </b>{item.recommended_crops}</p>
                  <p className="" style={{fontSize: '24px'}}><b>Fertilizer: </b>{item.fertilizer}</p>
                  
              </div>
              <br/>
              <br/>
          </div>
       

      ))}
    </div>
  )
}

export default Ph
