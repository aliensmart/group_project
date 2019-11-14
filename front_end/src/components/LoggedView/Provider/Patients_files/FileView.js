import React from 'react'
import File from './File'
import RightSidebare from '../RightSidebare'
import profile from '../../../../images/clair.png'
import MainMenu from '../MainSideBare'

const FileView = ()=>{
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
          <File/>
          <RightSidebare/>
          
      </div>
      
    </div>
    </div>
    )
}

export default FileView