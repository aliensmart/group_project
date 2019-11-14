import React from 'react';
import './App.css';
import UserHome from './components/LoggedView/User/UserHomePage'
import Router from './components/NotLoggedView/Router'
import ProviderRoute from './components/LoggedView/Provider/Routers'



function App() {
  const UserToken = sessionStorage.getItem("tokenUser")
  const ProviderToken = sessionStorage.getItem("tokenProvider")
  let content = null
  if(UserToken){
    content = (
      <div>
          <UserHome/>
      </div>
    )
  }else if(ProviderToken){
    content = (
      <div>
          <ProviderRoute/>
      </div>
    )
  }else{
    content=(
      <div>
        <Router/>
      </div>
    )
  }

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
