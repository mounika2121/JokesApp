import Header from '../Header';
import {Link} from 'react-router-dom';
import './index.css';

const NotFound = () => {
    return(
        <>
        <Header />
        <div className='not-found-container'>
            <img src='https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png'
                alt='not-found'
                className='not-found-img'
            />
            <h2 className='page-notfound'>Page Not Found</h2>
            <p>Go to the <Link to="/home">Home Page</Link></p>
        </div>
        </>
    )
}

export default NotFound;
