import React from 'react';
import css from './Button.module.css';
import cn from 'classnames';


function Button ({text,handleclick, size}) {
  
  return (
  

   <button onClick= {handleclick}  className={cn(css.base, css[size])}>{text}
   </button> 
   
  )
};

export default Button;
