import React from 'react'
import {Route} from 'react-router'
import FileView from './Patients_files/FileView'
import Home from './ProviderHomePage'
import CheatSheet from './Cheat_Sheet/CheatSheet'

const Routers = ()=>{
    return(
        <div>
            <Route path='/userfile/' component={FileView}/>
            <Route path='/content' component={CheatSheet}/>
            <Route exact path='/' component={Home}/>
        </div>
    )
}

export default Routers