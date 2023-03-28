import React from 'react'
import { useNavigate } from 'react-router-dom';
export const Wonderland = () => {
    const navigate=useNavigate();

  return (
    <>
        <h1>Welcome to Wonderland. Good to see you. Today, I will make you whole tour of this wonderland.</h1>
        <button onClick={()=>navigate(-1)}>Bye Wonderland</button>
    </> 
  )
}
