import './CoinItem.css'

const CoinItem = (props) => {
  return (
    <div className="coin-row">

        <p>{props.coins.market_cap_rank}</p>
        <div className="img-symbol">
            <img src={props.coins.image} alt="" />
            <p>{props.coins.name}</p>
        </div>
        <p className='coin-price'>{props.coins.current_price}$</p>
        <p className="coin-volume hide-mobile">{props.coins.total_volume.toLocaleString()}</p>
        {props.coins.price_change_percentage_24h < 0 ?(<p className='coin-percentage red'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>)
        :(<p className='coin-percentage green'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>)}

        
        <p className="coin-cap hide-mobile">{props.coins.market_cap.toLocaleString()}</p>

    </div>
  )
}

export default CoinItem