import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './index.css';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState(false);
    const [worngInputs, setWrongInouts] = useState(false);

    let navigate = useNavigate();

    const onClickSubmit = event => {
        event.preventDefault();
        if (name === "" || password === ""){
            setErrorMsg(prev=>!prev.errorMsg);
        }
        else if (name === "admin" && password === "admin123"){
            navigate('/home');
        }
        else{
            if (errorMsg){
                setErrorMsg(false);
            }
            setWrongInouts(prev=>!prev.worngInputs);
        }
    }

    return(
        <div className='login-bg-container'>
            <form className='form-container' onSubmit={onClickSubmit}>
                <div className='login-img-container'>
                    <img src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1710322828/jokes2_rtllqf.jpg"  alt="jokes" className='image'/>
                </div>
                <div className='inputs-container'>
                    <h1 className='login-heading'>Login to Read</h1>
                    <div className='inputs-inner-container'>
                        <label className='label-name'>Username</label><br />
                        <input 
                        type="text" 
                        placeholder='Enter your name' 
                        className='input-elements' 
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                        />
                    </div>
                    <div className='inputs-inner-container'>
                        <label className='label-name'>Password</label><br />
                        <input 
                        type="Password" 
                        placeholder='Enter your password' 
                        className='input-elements' 
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>
                    {errorMsg && (<p className='error-msg'>Name and Password Required*</p>)}
                    {worngInputs && <p className='error-msg'>Enter valid Name and Password</p>}
                    <button type="submit" className='login-button'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
