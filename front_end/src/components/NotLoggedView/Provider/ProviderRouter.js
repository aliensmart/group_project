import React from 'react'
import {Route} from 'react-router'
import Login from './Login'
import Signup from './Signup'

const ProviderRouter = ()=>{
    return(
        <div>
            <Route exact path='/provider' component={Login}/>
            <Route path='/provider/signup' component={Signup}/>
        </div>
    )
}

export default ProviderRouter