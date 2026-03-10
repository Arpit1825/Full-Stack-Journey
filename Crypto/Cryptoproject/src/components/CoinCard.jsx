 import  {Link} from 'react-router-dom'
import CoinDetail from './CoinDetail'
import useCurrency from '../contexts/CurrencyContext';
 export default function CoinCard(props){
    // console.log(props);
    const coin =props.coinData;

    const {symbol}=useCurrency();
  return (
    
  <>
  
 <Link to={`/coin/${coin.id}`}>
  <div className="bg-gray-800/60 mx-[0] my-2 px-5 py-4 
    gap-3px rounded-lg shadow-md border border-gray-700 
    flex justify-between items-center">
      
      <div>
        {/* Coin ka naam aur symbol */}
        <h2 className="text-xl font-bold text-white">{coin.name}</h2>
        <p className="text-sm text-gray-400">{coin.symbol}</p>
      </div>
      
      <div className="text-right">
        {/* Coin ka price aur change */}
        <p className="text-lg font-semibold text-white">{symbol}{coin.price.toLocaleString()}</p>
       <p className={`text-sm ${coin.price > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {coin.change> 0 ? '+' : ''}
                        {coin.change}%
                    </p>
      </div>

    </div>
 </Link>
    
    
  </>
  )

    

}