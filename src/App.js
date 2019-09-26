import React from 'react';
import './App.css';
import Movie from "./Movie";

function App() {
  return (
    <div className="App">
      <Movie image="img/stylists.jpg" name="Стиляги" date="2008" />
      <Movie image="img/sitter.jpg" name="Няня" date="2018" />
      <Movie image="img/return_ticket.jpg" name="Обратный билет" date="2012" />
    </div>
  );
}

export default App;
