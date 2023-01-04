import React, { useState } from "react";

const About= () =>{

 const[MyStyle,setMyStyle]=useState({
    color: 'black',
    backgroundColor: 'white'
 }
 );

 const [btnText,setBtnText]=useState('Enable dark mode');

    const toggle=()=>{
        if(MyStyle.color==='black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            });
            setBtnText('Enable light mode');
        }else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });
            setBtnText('Enable dark mode');
        }
     

 }

    return(
        <>
           <div className="container my-3" style={MyStyle}>
            <div className="alert alert-primary" role="alert" style={MyStyle}>
            This is a primary alert—check it out!
            </div>
            <div className="alert alert-secondary" role="alert" style={MyStyle}>
            This is a secondary alert—check it out!
            </div>
            <div className="alert alert-success" role="alert" style={MyStyle}>
            This is a success alert—check it out!
            </div>
            <div className="alert alert-danger" role="alert" style={MyStyle}>
            This is a danger alert—check it out!
            </div>
            <div className="alert alert-warning" role="alert" style={MyStyle}>
            This is a warning alert—check it out!
            </div>
            <div className="alert alert-info" role="alert" style={MyStyle}>
            This is a info alert—check it out!
            </div>
            <div className="alert alert-light" role="alert" style={MyStyle}>
            This is a light alert—check it out!
            </div>
            <div className="alert alert-dark" role="alert" style={MyStyle}>
            This is a dark alert—check it out!
            </div>
            <div>
                <button className="btn btn-primary" onClick={toggle}>{btnText}</button>
            </div>
            </div>
        </>

    );
}

export default About;