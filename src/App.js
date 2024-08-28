import React, { useRef } from 'react';

import './Style.css';


const App = () => {

 


  // useref
  const data=useRef(null);
  const data2=useRef(null);

  const GetData=()=>{

    console.log(data.current.value);

   console.log(data2.current.value);


 
  }
  // Addition
  const Addition=()=>{
    const a= parseFloat(data.current.value)|| 0;
    const b= parseFloat(data2.current.value)|| 0;
    const sum = a + b;
    alert(`The Addition is ${sum}`)
  }
  // subtraction
  const Subtraction=()=>{
    let a=data.current.value;
    let b=data2.current.value;
    let sum = a-b;

    alert(`The Subtraction is ${sum}`)
  }
  // Multiplication
  const Multiplication=()=>{
    let a=data.current.value;
    let b=data2.current.value;
    let sum = a*b;

    alert(`The Multiplication is ${sum}`)
  }
  // Division
  const Division=()=>{
    let a=data.current.value;
    let b=data2.current.value;
    let sum = a/b;

    alert(`The Division is ${sum}`)
  }
  // Modulo Division
  const ModuloDivision=()=>{
    let a=data.current.value;
    let b=data2.current.value;
    let sum = a%b;

    alert(`The Modulo Division is ${sum}`)
  }
  
  
  return (
    <>
    <h1 style={{textAlign:'center'}}>Hello this is App Component</h1>
    <label className='text-center mt-5'>Enter Num 1 :</label>
    <input type='number' placeholder='Enter Num 1' ref={data} onChange={()=>GetData()} />
    <label className='text-center mt-5'>Enter Num 2 :</label>
    <input type='number' placeholder='Enter Num 2' ref={data2} onChange={()=>GetData()}/>

    

<div className='mt-3'>
      <button className='btn btn-success me-5' onClick={()=>Addition()}>Addition</button>
      <button className='btn btn-success me-5' onClick={()=>Subtraction()}>Subtraction</button>
      <button className='btn btn-success me-5' onClick={()=>Multiplication()}>Multiplication</button>
      <button className='btn btn-success me-5' onClick={()=>Division()}>Division</button>
      <button className='btn btn-success me-5' onClick={()=>ModuloDivision()}>Modulo Division</button>
    

</div>
     
    </>
  )
}

export default App
