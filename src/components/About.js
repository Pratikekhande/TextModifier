import React from "react";

export default function About(props) {

// const [mystyle, setmystyle] = useState({
//     color:'black',
//     backgroundColor:'white'
// }) 
let mystyle = {
  color: props.mode ==='dark'?'white':'#5c5c8a',
  backgroundColor: props.mode ==='dark'?'#5c5c8a':'white'
}
// const [btntext, setbtntext] = useState('Enable Dark Mode')
// const togglestyle = ()=>{
//     if(mystyle.color == 'black'){
//         setmystyle({
//             color:'white',
//             backgroundColor:'black',
//             border: ' 2px solid white'
//         })
//         setbtntext('Enable Light Mode')
//     }
//     else{
//         setmystyle({
//             color:'black',
//             backgroundColor:'white'
//         })
//         setbtntext('Enable Dark Mode')
//     }
// }
 

  return (
    <>
    <div className="container" style={mystyle}>
      <h1 className="my-4">About TextModifier</h1>
      <div className="accordion" style={mystyle} id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About TextModifier
            </button>
          </h2>
          <div
            id="collapseOne"
            style={mystyle}
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free To Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            style={mystyle}
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Compatible.
            </button>
          </h2>
          <div
            id="collapseThree"
            style={mystyle}
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
     
      </div> 
      {/* <div className="my-3">
      <button onClick={togglestyle} type="button" className="btn btn-primary" >{btntext}</button>
      </div>  
      */}
    </>
  );
}
