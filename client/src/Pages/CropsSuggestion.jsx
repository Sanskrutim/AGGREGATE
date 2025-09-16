import React, { useEffect, useState } from 'react'
import { selectN,selectP,selectK } from '../features/NpkSlice'
import { useSelector } from 'react-redux'
import farms from '../../farm_data.json';
import { useNavigate } from 'react-router-dom';

const CropsSuggestion = () => {
  const N = useSelector(selectN)
  const P = useSelector(selectP)
  const K = useSelector(selectK)

  const navigate=useNavigate()
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  


  useEffect(() => {
    fetch('https://cropsuggestion-api.onrender.com/farms')
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
        return (item.nitrogen[0] < N && item.nitrogen[1] >N) && 
        (item.phosphorous[0] < P && item.phosphorous[1] >P) &&
        (item.potassium[0] < K && item.potassium[1] >K)
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
    
      <button type="submit" onClick={navMenu} className="font-bold text-white mb-20 mt-2 px-5 py-2 transition ease-in-out delay-150 bg-orange-700 hover:bg-gray-600 duration-300 rounded-md">Search for another NPK value</button>
       

      {filteredData.map(item => (
          
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full p-10 font-serif" key={item.id} >
              <h3 className='flex flex-row'><b>Crop: </b> &nbsp;<p className=' text-amber-900'><b>{item.crop}</b></p></h3>
              
              <div >
                <div className='flex justify-center mb-5 '><iframe
                 className='rounded-xl'
                 width="560"
                 height="315"
                 src={`https://www.youtube.com/embed/${item.video_link.split('=')[1]}`}
                 title={item.crop}
                 frameBorder="0"
                 allowFullScreen
               ></iframe></div>
              
                  <p className="" style={{fontSize: '24px'}}><b>Soil Preparation: </b>{item.Soil_Preparation}</p>
                  <p className="" style={{fontSize: '24px'}}><b>Sowing Technique: </b>{item.Sowing_Technique}</p>
                  <p className="" style={{fontSize: '24px'}}><b>Irrigation Technique: </b>{item.Irrigation_Techniques}</p>
                  <p className="" style={{fontSize: '24px'}}><b>Post Irrigation Management: </b>{item.Post_Irrigation_Management}</p>
                  <p className="" style={{fontSize: '24px'}}><b>Timing of Harvest: </b>{item.Timing_of_Harvest}</p>
                  <p className="" style={{fontSize: '24px'}}><b>Post Harvest Management: </b>{item.Post_Harvest_Management}</p>
                  
              </div>
              <br/>
              <br/>
          </div>
       

      ))}
    </div>
  )
}

export default CropsSuggestion
