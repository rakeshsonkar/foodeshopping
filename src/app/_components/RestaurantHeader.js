import Link from 'next/link'
import React from 'react'

const RestaurantHeader = () => {
  return (
   <div className='header-wrapper'>
    <div>
        <img style={{width:100}} src='/logo.jpg' />
    </div>
    <ul>
        <li>
            <Link href='/'> Home</Link>
        </li>
        <li>
            <Link href='/'> login/SignUp</Link>
        </li>
        <li>
            <Link href='/'> Profile</Link>
        </li>
    </ul>

   </div>
  )
}

export default RestaurantHeader