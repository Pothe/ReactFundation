import React from 'react'
import Demo from './Demo'
function App() {
  let mark =60

 

  return (
    <div>
      
       
       
    {mark}
    { (()=>{

      if(mark>80 && mark<100){
        return <h1>good</h1>
      }else if(mark>60 && mark<80){
        return <h1>fair</h1>
      }else{
        return <h1>F</h1>
      }
    })()}
    
    </div>
  )
}

export default App
