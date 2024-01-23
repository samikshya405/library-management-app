import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const {userInfo} = useSelector(state=>state.auth)
  return (
    <div className='bg-dark text-light'>
        <div>Welcome {userInfo.fName}!</div>
        <hr/>
        <ul className='list-unstyled ps-2'>
            <li>
                <Link className='nav-link mb-2'>Dashboard</Link>

            </li>
            <li>
                <Link className='nav-link mb-2'>Books</Link>

            </li>
        </ul>
    </div>
  )
}

export default Sidebar