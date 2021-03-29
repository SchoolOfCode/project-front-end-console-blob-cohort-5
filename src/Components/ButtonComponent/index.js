import React from 'react';
import css from './Button.module.css';
import cn from 'classnames';


function Button ({text,handleclick, variant,className, ...rest}) {
  
  return (
  
   <button className={cn(css.base, css[variant], className)} onClick= {handleclick}>
   {text}  
   
   </button> 
   
  )
};

export default Button;
