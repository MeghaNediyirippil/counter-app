import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';


function Counter() {
    // state creation
    const [counter,setCounter]=useState(0)   //Apply 0 as initial state value
    // counter function definition
    function incrementCounter(){
        // increment by 1
        setCounter(counter+1)
    }
    // counter decrement
    function decrementCounter(){
        if (counter!=0) {
            // decrement by 1
            setCounter(counter-1)
        }
    }
    // reset function
    function reset(){
        setCounter(0)
    }
  return (
    <div className='m-5 p-5 d-flex justify-content-center'>
       <div className='container m-5 p-5 border border-2 border-dark rounded-5 w-50 bg-dark'>
       <h1 className='text-light text-center'>Counter APP</h1>
        <h1 className='text-center text-light'>{counter}</h1>
        <div className='d-flex justify-content-between'>
        <MDBBtn onClick={incrementCounter} color='danger'>Increment</MDBBtn>
        <MDBBtn onClick={decrementCounter} color='danger'>Decrement</MDBBtn>
        <MDBBtn onClick={reset} color='danger'>Reset</MDBBtn>
      </div>
       </div>
    </div>
  )
}

export default Counter