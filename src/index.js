import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './routes/create/create'
import Explore from './routes/explore/explore'
import Login from './routes/login/login'
import BrowseCollections from './routes/browseCollections/browseCollections';
import TopRated from './routes/topRated/topRated';
import ItemScreen from './routes/itemScreen/itemScreen';
import SearchResults from './routes/searchResults/searchResults'
import './fonts/CircularStdBold/Circular Std Bold.ttf'
import './fonts/DrukWide/Druk Wide Web Super Regular.ttf'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
             <Route path='/' element={<App/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/browsecollections' element={<BrowseCollections/>}/>
        <Route path='/toprated' element={<TopRated/>}/>
        <Route path='/item' element={<ItemScreen/>}/>
        <Route path='/searchresults' element={<SearchResults/>}/>
        </Routes>
      </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
