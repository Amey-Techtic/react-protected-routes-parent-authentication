import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigate = useNavigate();
  
    const [userData, setUserData ] = useState({
        email: '',
        password:''
    });


    const handleInputData=(e)=>{
        const {name, value} = e.target;
        setUserData((prevData)=>(
            {
                ...prevData,
                [name]:value
            }
        ))
    }

    const submitUserData = (e)=>{
        e.preventDefault();
        console.log("userData.email", !userData.email)
        if(userData.email !== '' && userData.password !== ''){
            localStorage.setItem('userData', JSON.stringify(userData));
            navigate('/login');
        }
        else{
            alert('Please Enter Valid Details')
        }
    }
    // const storeData = localStorage.getItem('userData');
    // console.log(storeData);

  return (
    <div>
        <h1>Sign up</h1>

        <form>
            <input 
                type='text' 
                name="email" 
                value={userData.email} 
                placeholder='Enter the email' 
                onChange={handleInputData}
            />
            
            <input 
                type='password' 
                name='password' 
                value={userData.password} 
                placeholder='Enter the password' 
                onChange={handleInputData}
                
            />
            <button onClick={(e)=>submitUserData(e)}>Sign Up</button>
        </form>
        <Link to='/login'>Login</Link>

    </div>
  )
}

export default SignUp
