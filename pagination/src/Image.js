import React from 'react'
import { useState } from 'react';
import "./image.css"

const Image = ({images}) => {
        let n = images.length;
    const [index, setIndex] = useState(0);
    
  return (
    <div id='container'>
    <span id="prev" onClick={()=>setIndex(prev=>prev>0 ? (prev-1) : prev = n-1)}>{"<"} </span>
       {
        <img src={images[index]} alt="img" id='img' height="200px" width="200px"/>
       }
    <span id="next"  onClick={()=>setIndex(prev=>prev < n-1 ? (prev+1)%n : prev = 0)}>{">"}</span>
    </div>
  )
}

export default Image