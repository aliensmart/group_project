import React from 'react'
import {Route} from 'react-router'
import Home from './User/UserHomePage'

const Router = ()=>{
    return(
        <div>
            <Route exact path='/user/home' component={Home}/>
        </div>
    )
}

export default Router