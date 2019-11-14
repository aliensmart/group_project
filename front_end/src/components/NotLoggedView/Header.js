import React from 'react'
import {Link} from 'react-router-dom'

const Header = ()=>{
    return(
        <div>
            <Link type='nav' to='/user'>User</Link>
            <Link type='nav' to='/provider'>provider</Link>
        </div>
    )
}

export default Header