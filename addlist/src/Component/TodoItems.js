import React from 'react'

function TodoItems({items,deleteItem,toggelButton}) {
  return (
     <div>
  {
     items.map((ele,index)=>{return (
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <h3>{ele.title}</h3>&nbsp;&nbsp;&nbsp;
      <h3 style={{color:"red"}}>{ele.status?"completed":"Not Completed"}</h3>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{toggelButton(index)}}>Toggle</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{deleteItem(index)}}>Delete</button>
      </div>)
    })
  }

</div>
  )
}

export default TodoItems
