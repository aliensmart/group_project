import React from 'react'
import {Route} from 'react-router'
import User from './User/User'
import Provider from './Provider/Provider'
import Home from './Home'


const Router = ()=>{
    return(
        <div>
            <Route exact path='/' component={Home}/>
            <Route path='/user' component={User}/>
            <Route path='/provider' component={Provider}/>

        </div>
    )
}

export default Router