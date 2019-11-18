import React, {useState, useEffect} from 'react';
import axios from 'axios'

const UserLogin = ()=>{
  const useStateWithSessionStorage = sessionStorageKey=>{
    const [value, setValue] = React.useState(
        sessionStorage.getItem(sessionStorageKey)||'');
        return [value, setValue]
};
  const [value, setValue] = useStateWithSessionStorage('tokenUser');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthError, setIsAuthError] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [inputUser, setInputUser] = useState('');
  const [inputPass, setInputPass] = useState('');
  const [theError, setTheError] = useState('')

  useEffect(()=>{
      sessionStorage.setItem('tokenUser', value);
  }, [value]);
  let timeReload = (timeTo)=>{
    // 
    setTimeout((function(){window.location="http://localhost:3000/"}),timeTo)}
    const getToken = () => {
      const sendData = async () => {
          setIsAuthenticating(true);
          setIsError(false);
          setIsAuthError(false);
          try{                                                                                                                                                                            
              const endpoint = 'http://localhost:5000/user/login'
              const data = {
                  username: inputUser,
                  password: inputPass
              }
              const res = await axios.post(endpoint, data)
              console.log(res.data)
              if(res.data.api_key){
                  setValue(res.data.api_key)
                  javascript:timeReload(1000)
              }else{
                  setTheError(res.data.error)
                  setIsAuthError(true)
              } 
          }catch (error) {
              console.log(error)
              setIsError(true)
          }
          setIsAuthenticating(false)
      }
      sendData()
  };
  let contents = null;
  if (!value){
    contents = (
      <div>
        <form>
        <h3>User Login</h3>
        <label for="username">Username</label>
        <input type="text" placeholder="username" id="username" onChange={e=>setInputUser(e.target.value)}/>
        <label for="password">Password</label>
        <input type="password" placeholder="password" id="password" onChange={e=>setInputPass(e.target.value)}/>
        <input type="button" value="login" onClick={e=>{getToken(); e.preventDefault()}}/>
      </form>
      <a href="/user/signup">Don't have an account?</a>
      <a href="/provider">Go to Provider</a>
      </div>
    )
  }

    return(
        <div>
          {contents}
      </div>
    )
}

export default UserLogin