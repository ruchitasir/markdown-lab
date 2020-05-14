import React from 'react';


const RawInput= props=> {

   return(
       <div className="container">
           <textarea value={props.value} onChange={props.handleTextValueChange} />
       </div>
          )
    }

export default RawInput


