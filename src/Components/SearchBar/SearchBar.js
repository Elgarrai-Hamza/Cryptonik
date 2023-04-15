import './SearchBar.css';
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from 'react-router-dom';
import Coin from "../../Routes/Coin/Coin";


const SearchBar = (props) => {

  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');

    const handleChange = e => {
       const SearchWord = e.target.value;
       setSearch(SearchWord);

        const Filtered = props.coins.filter((coin) => {
            return coin.name.toLowerCase().includes(search.toLowerCase());
          });

        if (SearchWord === "") {
            setFilteredData([]);
          } else {
            setFilteredData(Filtered);
          }

      
    };

    

    const clearInput = () => {
        setFilteredData([]);
        setSearch("");
      };




  return (
    <div className="search">
      <div className="searchInputs">
        <form >
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          value = {search}
        />
        </form>
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
        
        
      </div>
      <div className="result">

          {filteredData.length !== 0 &&(
          <div className="dataResult">
              {filteredData.slice(0, 10).map(coin =>{
              return(
                
                  <Link to={`/coin/${coin.id}`}  className="dataItem" element={<Coin/>} key={coin.id} style={{ textDecoration: 'none' }} >
                      <p onClick={() => clearInput()}>{coin.name} </p>
                  </Link>
                  
                
              )
        })}

          </div>
        )}
      </div>
      
      
    </div>
  )
}

export default SearchBar