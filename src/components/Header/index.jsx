import {useNavigate} from 'react-router-dom';
import './index.css';

const Header = () => {
    let navigate = useNavigate();

    const onClickLogout = () =>{
        navigate('/');
    }

    const onclicklogo = () => {
        navigate('/home');
    }

    return(
        <header className='header-container'>
            <button className='logo-button' onClick={onclicklogo}>
                <h1 className='logo'>J<span className='span-in-logo'>o</span>kes</h1>
            </button>
            <div>
                <button className='logout-button' type="button" onClick={onClickLogout}>Logout</button>
            </div>
        </header>
    )
}

export default Header;
