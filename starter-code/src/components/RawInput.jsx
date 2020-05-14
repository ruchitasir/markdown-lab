import React, { useState } from 'react';
import marked from 'marked';

const RawInput= props=> {

    let [val, setval] = useState('')
    let [result, setresult]=useState('')
    const markdown=(e)=>{
        console.log(e.target.value)
        val =e.target.value
        setval(val)
        var result = marked(val);
        console.log(result)
        setresult(result)
    }
    //"<p>some html <span> </span> to insert</p>"
    var obj = {
        __html:  result
      }

   return(
       <div>
           <textarea value={val} onChange={markdown} />
           <div id="preview" dangerouslySetInnerHTML={obj}></div>
       </div>
          )
    }

export default RawInput


/*

import React from 'react';
const RawInput = (props) => (
    <div id="rawInput" className="container">
        Raw Input
        <br />
        <textarea
            value={props.value}
            onChange={props.handleValueChange}
        />
    </div>
);
export default RawInput;


*/