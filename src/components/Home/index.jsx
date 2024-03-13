import './index.css';
import Header from '../Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import JokesList from '../JokesList';
import { Rings } from 'react-loader-spinner';

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
};

const Home = () => {
  const [jokesData, setJokesData] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = () => {
    setApiStatus(apiStatusConstants.inProgress);
    axios
      .get("https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10")
      .then((response) => {
        if (response.status === 200) {
          setJokesData(response.data.jokes);
          setApiStatus(apiStatusConstants.success);
        } else {
          setApiStatus(apiStatusConstants.failure);
        }
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
        setApiStatus(apiStatusConstants.failure);
      });
  };

  const handleReadMoreClick = () => {
    fetchJokes();
  };

  const renderJokesTable = () => {
    return (
      <div className='table-top-container'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Joke</th>
            </tr>
          </thead>
          <tbody>
            {jokesData.map((eachJoke) => (
              <JokesList jokesDetails={eachJoke} key={eachJoke.id} />
            ))}
          </tbody>
        </table>
        <button type="button" onClick={handleReadMoreClick} className='read-more-button'>Read More</button>
      </div>
    );
  };

  const renderFailureView = () => (
    <div className='failure-container'>
        <img
            src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1710336718/network_error_d1vxzf.jpg"
            alt="error view"
            className="error-view-image"
        />
        <h3>No Network</h3>
        <p>No internet connection Please try again</p>
    </div>
  );

  const renderLoadingView = () => (
    <div className="loader-container">
      <Rings color="#0b69ff" height="100" width="100" />
    </div>
  );

  const renderJokesDetails = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderJokesTable();
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div>
        {renderJokesDetails()}
      </div>
    </>
  );
};

export default Home;
