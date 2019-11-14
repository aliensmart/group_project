import React from 'react'
import FileName from './CheatSheetContent'
import profile from '../../../../images/clair.png'
import MainMenu from '../MainSideBare'
import RightSidebareS from './Cheat_Sheet_sidebare'

const CheatSheet = ()=>{
    return(
        <div className="main">
            <MainMenu/>
        <div className="content">
            <div className="content_top">
          <div className="search">
              <input type="text" placeholder="search" className="searchInput"/>
              <i className="fas fa-search"></i>
          </div>
          <img src={profile} alt="profile" className="profile_provider"/>
          
        </div>
      <div className="content_bottom">
          <FileName/>
          <RightSidebareS/>
          
      </div>
      
    </div>
    </div>
    )
}

export default CheatSheet