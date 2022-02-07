import React, { useState } from 'react'
import {v4 } from 'uuid';
const TodoInput = ({onAdd}) => {
    const [value, setValue] = useState("");
  return (
    <div>
      <div>
                <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />
                <button onClick={() => {
                    if(value){
                    onAdd({
                             value,
                             id:v4(),
                    })
                    setValue("");
                    }
                    else{
                        console.log("enter task")
                    }
                }}>
                    ADD
                </button>
            </div>
    </div>
  )
}

export default TodoInput
