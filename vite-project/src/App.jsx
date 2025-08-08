import React, { useRef } from 'react'

function App() {
  let firstname =useRef()
  let lastname = useRef()
  let data = useRef()
  
 
  
 function HandleSubmit(){  
 
  data.current.innerHTML = `${firstname.current.value} ${lastname.current.value} `
    
 }
 
  return (
    <div>

       <input type="text" ref={firstname} />
       <input type="text" ref={lastname} />
       <span ref={data}></span>
      <button onClick={HandleSubmit}>Click</button>

    </div>
  )
}

export default App