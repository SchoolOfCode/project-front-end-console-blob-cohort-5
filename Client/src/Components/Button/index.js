import React from 'react';


function Button ({text,handleclick}) {
  
  return (
  <div>
   <button onClick= {handleclick}>{text}</button> 
   </div>
  )
};

export default Button;
