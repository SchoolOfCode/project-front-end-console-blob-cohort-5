import React from 'react';
import css from './Button.module.css';

function Button ({text,handleclick}) {
  
  return (
  <div>
   <button onClick= {handleclick}>{text}</button> 
   </div>
  )
};

export default Button;
