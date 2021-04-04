import CountriesList from './CountryList';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useState} from 'react'


function CountrySelect({handleChange}){
    // const [selectCountry, setSelectCountry] = useState("GBR") 

    // function handleSearch(num){
    //     console.log(num)
        
    //     setSearch(num)
    //     // setSearch(inputValue)
    //   }


return (
    <>
  <Autocomplete
      id="combo-box-demo"
      options={CountriesList}
      getOptionLabel={(option) => option.country}
      
    //   groupBy={(option) => (option.group)}
      style={{ width: 300 }}
      onChange={(event,value) => handleChange((value === null) ? "GBR" : value.code )}
      renderInput={(params) => <TextField {...params} label="Country Search" variant="outlined" placeholder="Search for a Country" />}
    />
</>
)
}
export default CountrySelect;