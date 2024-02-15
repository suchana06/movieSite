import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Search.css';
import Result from './Result';

const Search = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [matchedResult, setMatchedResult] = useState(null); // New state for storing the matched result

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/');
        setData(response.data);
      } catch (error) {
        console.error('Fetch error', error);
      }
    };

    fetchData();
  }, [showSearch]);

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };

  const handleSearch = () => {
    setShowSearch(false);
    const matchedResults = data.find((result) =>
      result.Movie_Title.toLowerCase().includes(query.toLowerCase())
    );
    if (matchedResults) {
      setMatchedResult({
        Movie_Title: matchedResults.Movie_Title,
        year: matchedResults.Year,
        Director: matchedResults.Director,
        Actors: matchedResults.Actors,
        Rating: matchedResults.Rating,
        Runtime: matchedResults.Runtime,
        Censor: matchedResults.Censor,
        Total_gross: matchedResults.Total_Gross,
        Main_Genre: matchedResults.main_genre,
        Side_Genre: matchedResults.side_genre,
      });
      setShowSearch(true);
    } else {
      navigate(`/error`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <div className="container">
        <div className="search-container">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="search-input"
            placeholder="Enter any movie name..."
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
      </div>
      {showSearch ? (
        <Result
          Movie_title={matchedResult.Movie_Title}
          year={matchedResult.year}
          Director={matchedResult.Director}
          Actors={matchedResult.Actors}
          Rating={matchedResult.Rating}
          Runtime={matchedResult.Runtime}
          Censor={matchedResult.Censor}
          Total_gross={matchedResult.Total_gross}
          Main_Genre={matchedResult.Main_Genre}
          Side_Genre={matchedResult.Side_Genre}
        />
      ) : null}
    </>
  );
};

export default Search;
