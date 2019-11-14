import React from 'react'
import profile from '../images/Round-Profile-Pic.png'

const Search =()=>{
    return(
        <div className="content_top">
          <div className="search">
              <input type="text" placeholder="search" className="searchInput"/>
              <i className="fas fa-search"></i>
          </div>
          <img src={profile} alt="profile" className="profile"/>
          
        </div>
    )
}

export default Search