import React from 'react';
import CardContainer from './Cards/card';
import Search from './search/Search';
import { useState } from "react";
import twit from './assets/twitter.png';
import backgroundImage from './assets/background.jpeg';

const Header = () => {
 return (
   <div>
     <h1 className="header">Find your optimal workplace in the city's cafes ☕</h1>
   </div>
 );
};

function App() {
 const [selectedOption, setSelectedOption] = useState(null);

 const handleSelectedOptionChange = (option) => {
   setSelectedOption(option);
 };

 return (
     <>
     <Header />
       <div className='search'>
       <Search onSelectedOptionChange={handleSelectedOptionChange} />
     </div>
     <CardContainer className='card-container-tag' selectedOption={selectedOption} />
     <div className='footer'>
       Made in Berlin, with ❤️
       <div className='twitter-footer'>
          <a href="https://twitter.com/onthatvoyage" className='social-item-twitter'>
          <img src={twit} alt="Twitter" />
          </a>
       </div>
     </div>
   </>

   
 );
} 

export default App;
