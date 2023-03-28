import React from 'react'
import {Link, Outlet} from 'react-router-dom';
export const Challenges = () => {
  return (
    <div>
        <input type="search" placeholder="Search Challenges"/><hr/>
        <nav>
            <Link to ='all'>All</Link>
            <Link to ='theory'>Theory</Link>
            <Link to ='practical'>Practical</Link>
        </nav>
        <Outlet/>
    </div>
  )
}
