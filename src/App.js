import React from "react";
import "./style.css";

import  MovieForm from './components/MovieForm.js'

import  Search from './components/Seach.js' 
import  MovieList from './components/MovieList.js' 

export default function App() {
  return (
    <div className='container'>
      <MovieForm/>
      <Search/>
      <MovieList/>
    </div>
  );
}
