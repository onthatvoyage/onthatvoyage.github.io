
import React from 'react';
import CardContainer from './Cards/card';
import Search from './search/Search';
 
function App() {
  return (
    <>
      <div className='search'>
        <Search />
      </div>
      <CardContainer />
      <div className='footer'>
        Made in Berlin, with ❤️
      </div>
    </>
  );
 }
 
 
 export default App;
 