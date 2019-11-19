import React, {useState, useEffect} from 'react';
import axios from 'axios';

const UserSIgnup = ()=>{

  const useStateWithSessionStorage = sessionStorageKey => {
    const [value, setValue] = React.useState(
        sessionStorage.getItem(sessionStorageKey) || "" );
        return [value, setValue]
};

const [value, setValue] = useStateWithSessionStorage('tokenUser');
const [isError, setIsError] = useState(false);
const [isLoading, setIsLoading] = useState(true);
const [isAuthError, setIsAuthError] = useState(false)
const [isAuthenticating, setIsAuthenticating] = useState(false)
const [inputFirstName, setInputFirstName] = useState('')
const [inputLastName, setInputLastName] = useState('')
const [inputusername, setInputUsername] = useState('')
const [inputpassword, setInputPassword] = useState('')
// const [inputConfirmPassword, setInputConfirmPassword] = useState('')
const [inputEmail, setInputEmail] = useState('')
const [theError, setTheError] = useState('')

let timeReload = (timeTo)=>{
  // 
    setTimeout((function(){window.location="http://localhost:3000/"}),timeTo)}

    useEffect(()=>{
      sessionStorage.setItem('tokenUser', value);
  }, [value])

  const getToken = ()=>{
    const sendData = async ()=>{
        setIsAuthenticating(true);
        setIsError(false);
        setIsAuthError(false);
        try{
            const endPoint = 'http://localhost:5000/api/user/create';
            const data = {
                first_name: inputFirstName,
                last_name: inputLastName,
                username: inputusername,
                password: inputpassword,
                email: inputEmail
            }
            const res = await axios.post(endPoint, data)
            console.log(res.data.error)
            if(res.data.api_key){
                setValue(res.data.api_key)
                javascript:timeReload(1000)

            }else{
                setTheError(res.data.error)
                setIsAuthError(true)
                
            }
        }catch(error){
            console.log(error);
            setIsError(true)
        };
        setIsAuthenticating(false)
        
    }
    sendData()
};

let contents = null;
if(!value){
  contents=(
    <div className="Log_main">
    <form className="Log_form">

<h3>User Sign up</h3>  
<label for="firstN">First Name</label>
<input type="text" placeholder="first Name" id="firstN" onChange={e=>setInputFirstName(e.target.value)}/>

<label for="lastN">Last Name</label>
<input type="text" placeholder="last Name" id="lastN" onChange={e=>setInputLastName(e.target.value)}/>

<label for="username">Username</label>
<input type="text" placeholder="username" id="username" onChange={e=>setInputUsername(e.target.value)}/>

<label for="email">Email</label>
<input type="email" placeholder="email" id="email" onChange={e=>setInputEmail(e.target.value)}/>

<label for="password">Password</label>
<input type="password" placeholder="password" id="password" onChange={e=>setInputPassword(e.target.value)}/>

<input type="button" value="Sign-up" onClick={e=>{getToken(); e.preventDefault()}}/>

<a href="/user">have an account?</a>
<a href="/provider">Go to Provider</a>
</form>

</div>
  )
}

    return(
        <div>
      {contents}
      </div>
    )
}

export default UserSIgnup