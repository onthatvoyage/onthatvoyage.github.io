import React from 'react';
import CardContainer from './Cards/card';
import Search from './search/Search';
import { useState } from "react";

const Header = () => {
 return (
   <div>
     <h1 className="header">Find your optimal workplace in the city's cafes ☕</h1>
     <p className="header-para">I'll be working from:</p>
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
     <CardContainer selectedOption={selectedOption} />
     <div className='footer'>
       Made in Berlin, with ❤️
     </div>
   </>
 );
} 

export default App;
