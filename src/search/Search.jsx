import { useState, useEffect } from "react";
import Select, { components } from 'react-select';
import cafes from '../assets/cafes.json';
import filters from '../assets/filter.png';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'grey' : 'grey',
 
  }),
  control: (provided, state) => ({
    ...provided,
    border: 0, 
    boxShadow: 'none',
    color: 'black'
  })
 }
 

 const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img className="icon-small" src={filters} alt="filter icon" />
    </components.DropdownIndicator>
  );
 };

function Search({onSelectedOptionChange}){
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);


    useEffect(() => {
    // Directly use the imported cafes data
    const data = cafes;
    // Extract city names and remove duplicates
    const uniqueCities = [...new Set(data.map(item => item.city))];
    // Map to format required by react-select
    const options = uniqueCities.map(city => ({
      value: city,
      label: city,
    }));
    setOptions(options);
 }, []);
   

 const handleChange = (selectedOption) => {
  setSelectedOption(selectedOption);
  onSelectedOptionChange(selectedOption);
}


   return(
       <div className="select" >
           <Select options={options} value={selectedOption} 
           onChange={handleChange}
           components={{ DropdownIndicator }}
           styles={customStyles}
           placeholder="I will work"
           />
       </div>
   )
}


export default Search;