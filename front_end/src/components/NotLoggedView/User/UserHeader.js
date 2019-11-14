import React from 'react'
import {Link} from 'react-router-dom'


const UserHeader = ()=>{
    return(
        <div>
            <Link type='nav' to='/user'>Login</Link>
            <Link type='nav' to='/user/signup'>Sign Up</Link>
        </div>
    )
}

export default UserHeader