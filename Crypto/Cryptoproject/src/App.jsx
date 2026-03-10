import { useState } from 'react'
import './App.css'
import CoinCard from './components/CoinCard'
import Shimmercoins from './components/Shimmercoins'
import usefetchCoins from './hooks/usefetchCoins'
import useCurrency from './contexts/CurrencyContext'
function App() {
  const [search,setSearch]=useState('');
  const {currency,setCurrency}=useCurrency();
  const [page,setPage]=useState(1);
  const {coins,loading}=usefetchCoins(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=25&page=${page}&sparkline=false`);
  const {symbol,setSymbol}=useCurrency();

  return (
    <div className=" relative min-h-screen p-8 overflow-hidden">
      
     
      <div className="fixed inset-0 z-0 bg-[url('https://i.pinimg.com/736x/f9/26/94/f92694c467846d3690ef4008a7311d84.jpg')] 
      bg-cover bg-center bg-no-repeat blur-md scale-110"></div>
      
      <div className="fixed inset-0 z-0 bg-gray-900/70"></div>

     
      <div className="relative z-10">
        <div className='mb-6'>
          <input type="text" placeholder='  Search Coins'
           className=' text-white border border-gray-700 bg-gray-800 rounded-lg w-[300px] h-[45px] mx-2 outline-none focus:border-red-400'
           value={search} onChange={(e)=>setSearch(e.target.value)} />
        </div>

        <select  className="bg-gray-800 text-white  border border-gray-700 p-3 rounded-lg outline-none cursor-pointer focus:border-red-400"value={currency} onChange={(e)=>setCurrency(e.target.value)}>
          <option value="inr">INR</option>
          <option value="usd">USD</option>
        </select>
        
        <h1 className='text-[40px] text-red-400 font-bold mb-8'>Crypto Tracker Test</h1>

        <div>
          {loading ? (
             Array(10).fill(0).map((_,i)=><Shimmercoins key={i}/>)
          ) : (
            coins.filter((coin) => {
              return coin.name.toLowerCase().includes(search.toLowerCase())
            }).map((coin) => {
              return <CoinCard key={coin.id} coinData={coin} currencySymbol={symbol} />
            })
          )}
        </div>

        <div className="flex jusify-center gap-6 mt-10 pb-10">
          <button onClick={()=>setPage(page-1)}
          disabled={page==1}
          className="text-white px-6 py-2 font-semibold rounded-lg bg-gray-800 border border-gray-700 hover:bg-red-400 hover:text-gray-900 disabled:cursor-not-allowed transition-all shadow-md">
           &larr; Previous
          </button>
          <span className=' text-xl text-red-400 px-4 py-2 font-bold '>{page}</span>
          <button onClick={()=>setPage(page+1)}
          disabled={page==25}
          className="px-6 py-2 text-white font-semibold rounded-lg bg-gray-800 border border-gray-700 hover:bg-red-400 hover:text-gray-900 transition-all shadow-md disabled:cursor-not-allowed">Next &rarr;</button>
        </div>

      </div>
    </div>
  )
}

export default App
