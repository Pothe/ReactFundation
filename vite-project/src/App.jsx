import React, { useRef, useState } from 'react'

function App() {
  const [list,setlist] =useState([])
  const [iterm,setiterm] = useState("")
  const input = useRef()
  const Addlist =()=>{
    list.push(iterm)
    setlist([...list])
    setiterm('')
    input.current.focus()

    
  }
  const HandleRemove=(i)=>{
    list.splice(i,1)
    setlist([...list])
    console.log(list)
  }
  return (
    <div>
    <div>{list.length}</div>
    <input ref={input} type="text" value={iterm} onChange={(e)=>setiterm(e.target.value)} />
    <button onClick={Addlist}>Add List</button>
    <table>
      <tbody>
        {
          list.length!==0? list.map((itermlist,i)=>{
            return(
          <tr key={i}>
            <td>{itermlist}</td>
            <td><button onClick={()=>HandleRemove(i)}>Remove</button></td>
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