import React from 'react';
import css from './Button.module.css';
import cn from 'classnames';


function Button ({text,handleclick, variant,className, ...rest}) {
  
  return (
  
   <button onClick= {handleclick}  className={cn(css.base, css[variant], className)}>{text}
          
   
   </button> 
   
  )
};

export default Button;
