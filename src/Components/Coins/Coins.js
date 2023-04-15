import CoinItem from "../CoinItem/CoinItem";
import './Coins.css';
import Coin from "../../Routes/Coin/Coin";
import { Link } from 'react-router-dom'; 
import SearchBar from '../SearchBar/SearchBar.js';

const Coins = (props) => {
  return (
    <div className="search-wrapper">

        <SearchBar coins = {props.coins}/>

        <div className="heading-tag">
             <h1>TOP 50 Coin By Market Cap</h1>
        </div>

        <div className="container-wrapper">

        <div className="container">

        <div className="heading">
            <p>#</p>
            <p className="coin-name">Coin</p>
            <p>Price</p>
            <p className="hide-mobile">Volume</p>
            <p>24h</p>
            <p className="hide-mobile">Market cap</p>
        </div>
        {props.coins.map(coins => {
            return(
                <Link to={`/coin/${coins.id}`} element={<Coin/>} key={coins.id} style={{ textDecoration: 'none' }}>

                    <CoinItem coins = {coins}  />

                </Link>
                
            )
        })}


        </div>

        </div>



    </div>
    
    



  )
}

export default Coins