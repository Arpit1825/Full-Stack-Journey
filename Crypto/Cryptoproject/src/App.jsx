import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CoinCard from './components/CoinCard'
import Shimmercoins from './components/Shimmercoins'

function App() {
  const [coins,setCoins] =useState([]);
  const [loading,setLoading]=useState(true);
  const [search,setSearch]=useState('');
  useEffect(() => {
    const fetchCoins = async () => {
      try {
     
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false');
        const data = await response.json();
        
     
        const formattedData = data.map((coin) => ({
          id: coin.id,
          name: coin.name,
          symbol: coin.symbol.toUpperCase(),
          price: coin.current_price,
          change: coin.price_change_percentage_24h
        }));

        
       setTimeout(()=>{
         setCoins(formattedData);
        setLoading(false);
       },3000)
        
      } catch (error) {
        console.error("Data fething problem occuring:", error);
      }
    };

    fetchCoins(); 
  }, []);
  return (
    <div className="p-8 bg-gray-900 min-h-screen"> 
    <div className='mb-6'>
      <input type="text" placeholder='  Search Coins'
       className=' w-200 text-white border border-gray-700 bg-gray-800 rounded-lg max-w-[300px] h-[45px] mx-2'
       value={search} onChange={(e)=>setSearch(e.target.value)} />
      
    </div>
      <h1 className='text-[40px] text-red-400 font-bold mb-8'>Crypto Tracker Test</h1>

  <div>
    
  {loading ? (
     Array(10).fill(0).map((_,i)=><Shimmercoins key={i}/>)
  ) : (
    coins.filter((coin) => {
      return coin.name.toLowerCase().includes(search.toLowerCase())
    }).map((coin) => {
      return <CoinCard key={coin.id} coinData={coin} />
    })
   
  )}
</div>
  </div>
  )
}

export default App
