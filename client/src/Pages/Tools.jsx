import React, { useEffect, useState } from 'react'
import "./Tools.css"
import { NavLink } from 'react-router-dom';

const Tools = () => {
  
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3031/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);
  return (
    <div className='cd'>
      
      
        {data.map(item => (
          
            <div className="card" key={item.id} style={{width: '18rem', height:'35rem'}}>
                <img className="card-img-top" src={item.image} alt="Card image cap" style={{width: '18rem', height:'20rem'}}/>
                <div className="card-body">
                    <h5 className="card-title" style={{fontSize: '13px'}}><b>{item.name}</b></h5>
                    <p className="card-text">{item.Description}</p>
                    <div href="#" className="">Price: {item.Price}</div>
                    <button className='btns'>Buy now</button>
                </div>
            </div>
         

        ))}
      
    </div>
  )
  
}

export default Tools