import React from 'react';
import css from './Button.module.css';
import cn from 'classnames';


function Button ({text,handleclick, variant,className, ...rest}) {
  
  return (
  
   <button onClick= {handleclick}>{text}
           className={cn(css.base, css[variant], className)} 
   
   </button> 
   
  )
};

export default Button;
