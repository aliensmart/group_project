import React from 'react'
import {Link} from 'react-router-dom'

const ProviderHeader = ()=>{
    return (
        <div>
                <Link type='nav' to='/provider'>Login</Link>
                <Link type='nav' to='/provider/signup'>signup</Link>
        </div>
    )
}

export default ProviderHeader