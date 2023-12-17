import React from 'react';
import CardContainer from './Cards/card';
import Search from './search/Search';
import { useState } from "react";
import twit from './assets/twitter.png';
import backgroundImage from './assets/background.jpeg';
import logo from './assets/onthatvoyage.png';
import { Grid } from '@mui/material';
import { Padding } from '@mui/icons-material';

const Header = () => {
 return (
     <img src={logo} alt="Maps" className='header-logo'/>     
   
 );
};

function App() {
 const [selectedOption, setSelectedOption] = useState(null);

 const handleSelectedOptionChange = (option) => {
   setSelectedOption(option);
 };

 return (
  <div className='background-blue'>
  
  <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >

        <Grid container item justifyContent="center" className='header' >
        <Header />
        </Grid>
        <div className='heading-cafe'>
        <h1>
        Discover your next beloved workspace.🍪 ☕
        </h1>
        </div>
        

        <Grid container  item alignItems="stretch" justifyContent="flex-start" className='search'>
        <Grid item lg={12} md={12} xl={12} xs={12}>
          <Search  onSelectedOptionChange={handleSelectedOptionChange} />
          </Grid>
        </Grid>

        <Grid item xs spacing={10} sx={{ paddingLeft: 1, paddingRight: 1, maxWidth: 600 }}>
 <CardContainer className='card-container-tag' selectedOption={selectedOption} />
</Grid>

        <Grid item xs>
        <div className='footer1'>
          Made in Berlin, with ❤️
          <div className='twitter-footer'>
              <a href="https://twitter.com/onthatvoyage" className='social-item-twitter'>
              <img src={twit} alt="Twitter" />
              </a>
          </div>
          </div>
        </Grid>
      </Grid>    
</div>
   
  

 );
} 

export default App;
