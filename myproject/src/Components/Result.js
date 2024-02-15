import './Result.css'
import { useState, useEffect } from 'react';
import img2 from './result.jpeg';
export default function Result({ Movie_title, year, Director, Actors, Rating, Runtime, Censor, Total_gross, Main_Genre, Side_Genre }) {
  const [isVisible, setIsVisible] = useState(true);
  const [key, setKey] = useState(Date.now());
  useEffect(() => {
    setIsVisible(true); // Reset visibility when new props are received
    setKey(Date.now());
  }, [Movie_title]);

  function jump() {
    window.open('https://yts.autos/', '_blank', 'noreferrer');
  }

  function handleClose() {
    setIsVisible(false);
  }

  if (!isVisible) {
    return null; // If not visible, don't render anything
  }
  return (
    <>
      <div className="box wrapper">
        <div className='img'><img src={img2} alt='POSTER' /></div>
        <div className='info'>
          <button className='button' onClick={jump} >Jump to download site</button>
          <button className='button' onClick={handleClose}>CLOSE</button>
          <h2>Movie Title :  {Movie_title}</h2><hr />
          <h2>Year :  {year}</h2><hr />
          <h2>Director :  {Director}</h2><hr />
          <h2>Actors :  {Actors}</h2><hr />
          <h2>Rating :  {Rating}</h2><hr />
          <h2>Runtime(minutes) :  {Runtime}</h2><hr />
          <h2>Censor :  {Censor}</h2><hr />
          <h2>Total gross :  {Total_gross}</h2><hr />
          <h2>Main Genre :  {Main_Genre}</h2><hr />
          <h2>Side Genre :  {Side_Genre}</h2>
        </div>
      </div>
    </>
  )
}

