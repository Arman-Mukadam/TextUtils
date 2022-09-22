import React, { useState } from 'react';
// import { View, StyleSheet, Text } from 'react-native';


const Textform = (props) => {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // setAlert("'text converted imto upper case','success'")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }
    const handlecopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);

    }
    const handleextraspaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnchange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Your Text Here');

    return (
        <>

            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 " onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2 " onClick={handleLowClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2 " onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2 " onClick={handleextraspaces}>Clear extra spaces</button>
                <button className="btn btn-primary mx-2 " onClick={handlecopy}>Copy</button>

            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text Summary</h1>
                <p> {text.split(" ").length} and {text.length} characters</p>

                <h1>Preview</h1>
                <p className='my-3'>{text}</p>
            </div>

        </>
    );
}

export default Textform;