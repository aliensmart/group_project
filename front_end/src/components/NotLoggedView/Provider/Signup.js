import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ProviderSIgnup = ()=>{

  const useStateWithSessionStorage = sessionStorageKey => {
    const [value, setValue] = React.useState(
        sessionStorage.getItem(sessionStorageKey) || "" );
        return [value, setValue]
};

const [value, setValue] = useStateWithSessionStorage('tokenProvider');
const [isError, setIsError] = useState(false);
const [isLoading, setIsLoading] = useState(true);
const [isAuthError, setIsAuthError] = useState(false)
const [isAuthenticating, setIsAuthenticating] = useState(false)
const [inputHospital, setInputHospital] = useState('')
const [inputDepartment, setInputDepartment] = useState('')
const [inputusername, setInputUsername] = useState('')
const [inputDoctorName, setInputDoctorName] = useState('')
const [inputpassword, setInputPassword] = useState('')
// const [inputConfirmPassword, setInputConfirmPassword] = useState('')
const [inputEmail, setInputEmail] = useState('')
const [theError, setTheError] = useState('')

let timeReload = (timeTo)=>{
  // 
    setTimeout((function(){window.location="http://localhost:3000/"}),timeTo)}

    useEffect(()=>{
      sessionStorage.setItem('tokenProvider', value);
  }, [value])

  const getToken = ()=>{
    const sendData = async ()=>{
        setIsAuthenticating(true);
        setIsError(false);
        setIsAuthError(false);
        try{
            const endPoint = 'http://localhost:5000/api/provider/create';
            const data = {
                doctor_name: inputDoctorName,
                department: inputDepartment,
                username: inputusername,
                hospital: inputHospital,
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
  contents = (
    <div>
      <form>

<h3>Provider Sign up</h3>

<label for="DocName">Doctor Name</label>
<input type="text" placeholder="Doctor Name" id="DocName" onChange={e=>setInputDoctorName(e.target.value)}/>

<label for="hospital">Hospital Name</label>
<input type="text" placeholder="Hospital Name" id="hospital" onChange={e=>setInputHospital(e.target.value)}/>

<label for="username">Username</label>
<input type="text" placeholder="username" id="username" onChange={e=>setInputUsername(e.target.value)}/>

<label for="username">Department</label>
<input type="text" placeholder="department" id="department" onChange={e=>setInputDepartment(e.target.value)}/>

<label for="email">Email</label>
<input type="email" placeholder="email" id="email" onChange={e=>setInputEmail(e.target.value)}/>

<label for="password">Password</label>
<input type="password" placeholder="password" id="password" onChange={e=>setInputPassword(e.target.value)}/>

<input type="button" value="Sign-up" onClick={e=>{getToken(); e.preventDefault()}}/>
</form>
<a href="/provider">have an account?</a>
<a href="/user">Go to User</a>
    </div>
  )
}

    return(
        <div>
      {contents}
      </div>
    )
}

export default ProviderSIgnup