import React,{useState} from 'react'



export default function Textform(props) {

    const handleUppercase = ()=>{
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showalert("Converted To UpperCase","success: ")
    }
    const handleLowercase = ()=>{
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showalert("Converted To LowerCase","success: ")
    }
    const handleClearText = ()=>{
        let newtext = ''
        setText(newtext)
        props.showalert("Text Cleared ","success: ")
    }
    const handleCopyText = ()=>{
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();
        props.showalert("Text Copied To Clipboard","success: ")
    }
    const handleExtraSpace = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showalert("Removed ExtraSpace","success: ")
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.title}</h1>
        <div className="mb-3">
        <label htmlFor="mybox" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#5c5c8a':'white',color:props.mode === 'dark'?'white':'black'}} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn-primary mx-2 my-2" onClick={handleUppercase}> Uppercase</button>
        <button disabled={text.length===0} className="btn-primary mx-2 my-2" onClick={handleLowercase}> Lowercase</button>
        <button disabled={text.length===0} className="btn-primary mx-2 my-2" onClick={handleClearText}> ClearText</button>
        <button disabled={text.length===0} className="btn-primary mx-2 my-2" onClick={handleCopyText}> CopyText</button>
        <button disabled={text.length===0} className="btn-primary mx-2 my-2" onClick={handleExtraSpace}> Remove ExtraSpace</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#5c5c8a'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read.</p>
            <h3>$ Preview $</h3>
            <p><i>{text.length>0?text:"Enter Text In TextArea !"}</i></p>
        </div>
        

        </> 
        
    )
}
