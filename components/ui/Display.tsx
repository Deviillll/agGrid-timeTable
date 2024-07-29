import React from 'react'

const Display = ({subject,teacher,room}:any) => {
  return (
    <div>
        <h1>{subject}</h1>
        <h1>{teacher}</h1>
        <h1>{room}</h1>
      
    </div>
  )
}

export default Display
