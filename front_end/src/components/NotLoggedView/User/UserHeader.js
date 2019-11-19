import React from 'react'
import {Link} from 'react-router-dom'
import '../Log_sign.css'


const UserHeader = ()=>{
    return(
        <div className="Log_header">
            <Link type='nav' to='/user'>Login</Link>
            <Link type='nav' to='/user/signup'>Sign Up</Link>
        </div>
    )
}

export default UserHeader