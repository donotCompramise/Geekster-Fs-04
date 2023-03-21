import { useState } from 'react'

function Count() {
    let [state,setState] = useState()
    let num=0
    const addNum=()=>{
        state =num+1
        setState(state)
    }
  return (
    <div>
      <input type="number" onChange={(e)=>{e.target.value}}></input>
      <button onClick={addNum}></button>
    </div>
  )
}

export default Count
