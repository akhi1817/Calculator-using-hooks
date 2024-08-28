import React, { useRef, useState } from 'react'

const App2 = () => {

  const[sum,setsum]=useState(0);

  const data1=useRef(null);
  const data2=useRef(null);

  const Addition=()=>{
      let a=parseInt(data1.current.value);
      let b=parseInt(data2.current.value);
      let sum= a+b;
      console.log(sum);
      setsum(sum);
  }
  // subtraction
  const Subtraction=()=>{
    let a=(data1.current.value);
    let b=(data2.current.value);
    let sum= a-b;
    console.log(sum);
    setsum(sum);
}
// multiplication
const Multiplication=()=>{
  let a=(data1.current.value);
  let b=(data2.current.value);
  let sum= a*b;
  console.log(sum);
  setsum(sum);
}
// division
const Division=()=>{
  let a=(data1.current.value);
  let b=(data2.current.value);
  let sum= a/b;
  console.log(sum);
  setsum(sum);
}
//  Modulo division
const Modulo_division=()=>{
  let a=(data1.current.value);
  let b=(data2.current.value);
  let sum= a%b;
  console.log(sum);
  setsum(sum);
}
  return (
    <>
    <center>
    <h1 className='text-Success bg-primary mb-4'>Basic Calculator using Hooks</h1>

    <label className='ms-3'>Enter 1<sup>st</sup>Number :</label>
    <input type='number' id='num1' ref={data1} />
    <label className='ms-3'>Enter 2<sup>nd</sup>Number :</label>
    <input type='number' id='num2' ref={data2}/><br/>
    <button className='btn btn-warning me-4 mt-4' onClick={()=>Addition()}>Addition</button>
    <button className='btn btn-warning me-4 mt-4' onClick={()=>Subtraction()}>Subtraction</button>
    <button className='btn btn-warning me-4 mt-4' onClick={()=>Multiplication()}>Multiplication</button>
    <button className='btn btn-warning me-4 mt-4' onClick={()=>Division()}>Division</button>
    <button className='btn btn-warning me-4 mt-4' onClick={()=>Modulo_division()}>Modulo division</button>
    <br/>
    <div style={{width:'300px', border:'1px solid black'}} className=' bg-light mt-3 border-dark '><h5> {sum}</h5></div>
    </center>
    </>
  )
}

export default App2
