import React,{ useState } from 'react';
import RawInput from './RawInput';
import marked from 'marked';

const DisplayContainer= props=> {

    let [value, setValue] = useState('')
  
    
    const handleTextValueChange=(event)=>{
        console.log(event.target.value)
        value =event.target.value
        setValue(value)
      
    }

    let convertMarkdown = () =>{
        var rawMarkup = marked(value);
        return { __html: rawMarkup };
    }

   return(
        <div>
               <RawInput value={value}  handleTextValueChange={(event) => handleTextValueChange(event)}/>
            <div id="preview" dangerouslySetInnerHTML={convertMarkdown()}></div>
        </div>
      
          )
    }

export default DisplayContainer

