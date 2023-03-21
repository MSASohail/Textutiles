// rfc react ka function based component
// {useState}  means we are using hooks
import React, { useState } from 'react'
export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleupcase = () => {
    console.log("clicked uppercase")
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted into Uppercase","sucess")
  }
  const handlelowcase = () => {
    console.log("lower case clicked")
    let lowtext = text.toLowerCase()
    setText(lowtext)
    props.showAlert("Converted into Lowercase","sucess")
  }

  const handlerevcase = () => {
    console.log("lower case clicked")
    let lowtext = text.split("").reverse().join("");
    setText(lowtext)

  }
  const handleclearcase = () => {
    console.log("clear called")
    setText(" ");
  }
  const handlespeek = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);

  }

  const handleonchange = (event) => {
    console.log("onchanged")
    setText(event.target.value);
  }


  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 >{props.heading}</h1>
        <div className="mb-3" >
          <textarea className="form-control" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? 'red' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary m-2" onClick={handleupcase}>ToUpperCase</button>
        <button type="button" className="btn btn-primary m-2" onClick={handlelowcase}>ToLowerCase</button>
        <button type="button" className="btn btn-primary m-2" onClick={handlerevcase}>Reverse</button>
        <button type="button" className="btn btn-primary m-2" onClick={handleclearcase}>Clear</button>
        <button type="button" className="btn btn-primary m-2" onClick={handlespeek}>Speek</button>
      </div>

      <div className={`"container" style={color: props.mode === 'dark' ? 'white' : 'black'}`}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} word {text.length} characters</p>
        <p>{0.005 * text.split(" ").length} Minute time to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the above box here topreview your text"}</p>
      </div>


    </>
  )
}
