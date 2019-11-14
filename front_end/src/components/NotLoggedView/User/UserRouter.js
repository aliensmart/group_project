import React from 'react'
import {Route} from 'react-router'
import Login from './Login'
import Signup from './Signup'

const UserRouter = ()=>{
    return(
        <div>
            <Route exact path='/user' component={Login}/>
            <Route path='/user/signup' component={Signup}/>
        </div>
    )
}

export default UserRouter