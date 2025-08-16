import React, { useState } from 'react'
import './Color.css'
const Color = () => {
  const [color, setColor] =useState('#fff');
  const[ rgb,setRgb] = useState(false)
  const[ hex,setHex] = useState(true);
  
  const handleClick = ()=> {
    if (rgb) {
      let r = Math.floor(Math.random() * 255 +1);
      let g = Math.floor(Math.random() * 255 +1);
      let b = Math.floor(Math.random() * 255 +1);
      setColor(`rgb(${r},${g},${b})`)
    }
    if (hex) {
       const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() *(hex.length))];
    }
    setColor(hexColor);
    } 
    
  }
  return (
    <div className='color-container' style={{
      background: color
    }}>
      <div className="btns">
        <button onClick={()=> {
          setHex(true);
          setRgb(false)
        }}>Create HEX Color</button>
        <button onClick={()=> {
          setRgb(true);
          setHex(false)
        }}>Create RGB Color</button>
        <button onClick={handleClick}>Create Random Color</button>
      </div>
      <h1 className='type-system'>{hex ? "HEX Color" : "RGB Color"}</h1>
      <div className="color-name">
        {
          color
        }
      </div>
    </div>
  )
}

export default Color