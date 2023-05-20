import React, { useState } from "react";

export default function TextFrom(props) {
  const [text, setText] = useState("");
  const handleonchange = (event) => {
    console.log("on change Click");
    setText(event.target.value);
  };
  const HandleUpClick = () => {
    console.log("Upper Case Was Click" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  };
  const HandleLoClick = () => {
    console.log("Lower Case Was Click" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  };
  const HandleClear = () => {
    // console.log("L" +text)
    let newText = "";
    setText(newText);
    props.showAlert("Text is cleard ","success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Start speaking ","success");
  };
  // const countword =(str) =>{
  //     let words;
  //     if(text=" ")
  //       words=0;
  //     else{
  //       words=str.trim().split(/\s+/).length();
  //     }
  //     return words;

  // }

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#18264c' }}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            style={{backgroundColor:props.mode==='dark'?'grey':'white'}}
            value={text}
            onChange={handleonchange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={HandleUpClick}>
          Convert Into Upper
        </button>
        <button className="btn btn-primary mx-2" onClick={HandleLoClick}>
          Convert Into Lower
        </button>
        <button className="btn btn-primary mx-2" onClick={HandleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={speak}>
          Speak
        </button>
      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#18264c'}}>
        <h1> Your Text Summary</h1>
        <p>
          {" "}
          {text.split(" ").length-1} words and {text.length} character
        </p>
        <p> {0.008 * text.split(" ").length} Mintues To Read the word</p>
        <h2> Preview</h2>
        <p>{text.length>0?text:"Enter The Something to Preview it  here"}</p>
      </div>
    </>
  );
}
