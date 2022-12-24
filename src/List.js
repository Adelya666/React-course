import React from 'react'

const List = () => {
    const data=["monday","tuesday","wendsday"]
   
  return (
    <>
    <ul>
    {data && data.map((element)=>(<li key={element}> {element}</li>))}
    </ul>

    </>
  )
}

export default List