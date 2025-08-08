import React, { useState } from 'react'

function App() {
  const [list, setlist] = useState([]);
  const [iterm ,setiterm] = useState('')
  const AddTodo =()=>{
   list.push(iterm)
   setlist([...list])
   
  }
  return (
    <div>
      <span>{list.length}</span>
     <input type="text" value={iterm} onChange={(e)=>setiterm(e.target.value)} />
     <button onClick={AddTodo}>Add</button>
     <table>
      <tbody>
        {
          list.length !==0? list.map((itermlist,i)=>{
         return(
            <tr key={i}>
            <td>{itermlist}{i}</td>
            <td><button>remove</button></td> 
           </tr>
         )
          }):(null)

        }
      
      </tbody>
     </table>
    </div>
  )
}

export default App