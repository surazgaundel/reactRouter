import React from 'react'
import { useParams,useSearchParams } from 'react-router-dom'
export const UsersDetails = () => {
  const {userID}=useParams();
  const [searchParams,setSearchParams] = useSearchParams();
  const activeUsers =searchParams.get('filter')=='active';
    return (
    <>
    <h2>UsersDetails {userID}</h2>
    <div>
        <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
        <button onClick={()=>setSearchParams({})}>All Users</button>
    </div>
    {activeUsers?<h1>Active Users are: A,B,C</h1>:<h1>All Users are:A,B,C,D,E,F</h1>}
    </>

  )
}
