import React from 'react'
import UserHome from './Home'
import RightSidebare from './RightSidebare'
import profile from '../../../images/clair.png'
import MainMenu from './MainSideBare'


const UserHomePage = ()=>{
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
          <UserHome/>
          <RightSidebare/>
          
      </div>
      
    </div>
    </div>
    )
}

export default UserHomePage