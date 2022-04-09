import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ");

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate()

    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }

    if(user){
        navigate('/shop')
    }

    const handleUserSignIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>LogIn</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">PassWord</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                    </div>

                    <p style={{color:'red'}}>{error?.message}</p>

                    {
                        loading && <p>Loading...</p>
                    }

                    <button className='form-submit' type="submit">Submit</button>
                </form>
                <p>
                    New to Ema-john? <Link className='form-link' to='/signup'>Create New Account</Link>
                </p>
            </div>    
        </div>
    );
};

export default Login;