import React from 'react'
import { useEffect, useState } from 'react'

const Crops = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://tools-api-lrwq.onrender.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);
  return (
    <div className='cd'>
      
      
        {data.map(item => (
          
            <div className="card" key={item.id} style={{width: '18rem', height:'25rem'}}>
                <img className="card-img-top" src={item.image} alt="Card image cap" style={{width: '18rem', height:'20rem'}}/>
                <div className="card-body">
                    <h5 className="card-title" style={{fontSize: '13px'}}><b>{item.name}</b></h5>
                </div>
            </div>
         

        ))}
      
    </div>
  )
}

export default Crops
