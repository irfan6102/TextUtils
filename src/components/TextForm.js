import React, { useState } from "react";

const TextForm =(props) =>{

    const handleUpClick=()=>{

        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLowClick=()=>{

        let newText=text.toLowerCase();
        setText(newText);
    }

    
    const handleClClick=()=>{

        let newText='';
        setText(newText);
    }

    const handleUpOnChange=(event)=>{
        // console.log("On chnage");
        setText(event.target.value);
        // console.log(text);
    }

    const[text, setText]=useState(' ');

    const[wordsLength,setWordLength]=useState(0);

    const WordCount=(words)=>{
         words=text.trim();

        if(words.length===0){
             setWordLength(0);
        }else{
            setWordLength(words.split(" ").length);
        }
    }

    return(
        <>
        <div className="container my-3" style={{color: props.md==='dark'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
            <label htmlFor="myBox"></label>
            <textarea className="form-control" value={text} onChange={handleUpOnChange} style={{backgroundColor: props.md==='light'?'grey':'white',color: props.md==='dark'?'black':'white'}}  id="myBox" rows="8"></textarea> 
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClClick} >Clear text</button>

        </div>
        <div className="container" style={{color: props.md==='dark'?'black':'white'}}>
            <h2> Number of words and characters</h2>
            
            <p> {text.split(" ").length} words and {text.length} charcaters</p>
            <h2>Preview</h2>
            <p>{ text.length >0 ? text :'Enter some text to preview it here!'}</p>
        </div>

        </>
    );
}

export default TextForm;