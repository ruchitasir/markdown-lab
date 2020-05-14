import React,{ useState } from 'react';
import RawInput from './RawInput';

const DisplayContainer= props=> {

    let [mdStr, setMdStr] = useState('')
  

   return(
         <RawInput  />
          )
    }

export default DisplayContainer


/*

import React , {useState} from 'react';
import marked from 'marked';
import RawInput from './RawInput'
const DisplayContainer = () => {
    const [value, setValue] = useState('Some markdown text.')
    let handleValueChange = (event) => {
            setValue(event.target.value)
    }
    let convertMarkdown = () =>{
        var rawMarkup = marked(value);
        return { __html: rawMarkup };
    }
    return (
        <div id='DisplayContainer'>
                <RawInput value={value} handleValueChange={(event) => handleValueChange(event)} />
                <div className="rawContainer">
                    Display Container
                    <div id='preview' dangerouslySetInnerHTML={convertMarkdown()}></div>
                </div>
        </div>
    );
}
export default DisplayContainer;

*/