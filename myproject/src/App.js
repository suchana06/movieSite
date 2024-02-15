import About from './Components/About';
import './App.css';
import Head from './Components/Head';
import Navbar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Result from './Components/Result';
import Search from './Components/Search';
function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Head/>}></Route>
        <Route path="/result" element={<Result/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/error' element={<div><h1 style={{textAlign:"center"}}>......ERROR!!......</h1><h3 style={{textAlign:"center"}}>MOVIE DATA NOT FOUND </h3></div>}></Route>
        <Route path="/result" element={(<Search></Search>)} />
      </Routes>
    </>

  );
}

export default App;
