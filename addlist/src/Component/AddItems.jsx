import React from 'react'
import {useState} from 'react'
import TodoItems from './TodoItems'
function AddItems() {
  const [state,setState] = useState()
  const [todolist,setTodolist]=useState([])
  const addList=(()=>{
    var newItem={
      title:state,
      status:false,
    }
  setTodolist([...todolist,newItem])
})
const deleteItem =((index)=>{
 let filtered= todolist.filter((item,i)=>{
        return index!=i 
  })
  setTodolist(filtered)
})
let toggelButton=((index)=>{
  let newArray=todolist.map((item,i)=>{return index===i ? {...item, status:!item.status}:item
})
  setTodolist(newArray)
})

  return (
    <div style={{textAlign:"center",marginTop:"100px"}}>
    <h2>Todo List</h2>
    <div style={{display:"flex",justifyContent:"center",padding:"10px"}}>

      <input type="text"  placeholder='enter a text' onChange={(e)=>{setState(e.target.value)}} />&nbsp;&nbsp;
      <button onClick={addList}>click</button>
    </div>
    <TodoItems items={todolist} deleteItem={deleteItem} toggelButton={toggelButton}/>
    </div>
  )
}
export default AddItems
