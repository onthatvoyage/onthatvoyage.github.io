import Select from "react-select";
import { useState, useEffect } from "react";

function Search(){
   const [data, setData] = useState([]);
   const [selectedOption, setSelectedOption] = useState(null);
   const [options, setOptions] = useState([]);

   useEffect(() => {
    fetch('./assets/cafes.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        // Extract city names and remove duplicates
        const uniqueCities = [...new Set(data.map(item => item.city))];
        // Map to format required by react-select
        const options = uniqueCities.map(city => ({
          value: city,
          label: city,
        }));
        setOptions(options);
      });
   }, []);
   

   const handleChange = (selectedOption) => {
       setSelectedOption(selectedOption);
   }

   return(
       <div className="select" >
           <Select options={options} value={selectedOption}
           onChange={handleChange}
           />
       </div>
   )
}


export default Search;