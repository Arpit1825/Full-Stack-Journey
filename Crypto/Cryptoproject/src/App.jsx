import { useState } from 'react'
import './App.css'
import CoinCard from './components/CoinCard'
import Shimmercoins from './components/Shimmercoins'
import usefetchCoins from './hooks/usefetchCoins'
import useCurrency from './contexts/CurrencyContext'
import Watchlist from './components/Watchlist'
import { Link } from 'react-router-dom'
function App() {
  const [search,setSearch]=useState('');
  const {currency,setCurrency}=useCurrency();
  const [page,setPage]=useState(1);
  const {coins,loading}=usefetchCoins(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=25&page=${page}&sparkline=false`);
  const {symbol,setSymbol}=useCurrency();
  const [open,setOpen]=useState(false);

  return (
    <div className=" relative min-h-screen p-8 overflow-hidden">
      
     
      <div className="fixed inset-0 z-0 bg-[url('https://i.pinimg.com/736x/f9/26/94/f92694c467846d3690ef4008a7311d84.jpg')] 
      bg-cover bg-center bg-no-repeat blur-md scale-110"></div>
      
      <div className="fixed inset-0 z-0 bg-gray-900/70"></div>

     
      <div className="relative z-10">
<div className="flex flex-wrap justify-between items-center gap-4 mb-3 
    bg-transparent p-2 border-none backdrop-blur-none 
    md:bg-gray-900/40 md:p-4 md:rounded-xl md:border md:border-gray-700/50 md:backdrop-blur-md">
        <div className='flex-1 min-w-[250px] mb-6'>
          <input type="text" placeholder='  Search Coins'
           className="text-white border border-gray-700 bg-gray-800/80 rounded-lg w-full h-[45px] px-4 outline-none focus:border-yellow-400 transition-all shadow-inner"
           value={search} onChange={(e)=>setSearch(e.target.value)} />
        </div>
        <button 
  onClick={() => setOpen(true)}
  className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-all mx-4 mb-5"
>
  ⭐<span className='hidden md:inline'> Watchlist</span>
</button>
        <select  className="mb-5 bg-teal-700 text-white border border-gray-700 px-4 py-2.5 rounded-lg outline-none cursor-pointer focus:border-red-400 hover:bg-teal-600 transition-all shadow-lg font-semibold" value={currency} onChange={(e)=>setCurrency(e.target.value)}>
          <option value="inr">INR</option>
          <option value="usd">USD</option>
        </select>
        </div>
        <h1 className='text-[40px] text-red-400 font-bold mb-8'>Crypto Tracker </h1>
        <Watchlist open={open} setOpen={setOpen} />
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
          className="text-white px-2 py-3 font-semibold rounded-lg bg-gray-800 border border-gray-700 hover:bg-red-400 hover:text-gray-900 disabled:cursor-not-allowed transition-all shadow-md ">
          &larr; Previous
          </button>
          <span className=' text-xl text-red-400 px-4 py-2 font-bold '>{page}</span>
          <button onClick={()=>setPage(page+1)}
          disabled={page==25}
          className="px-4 py-3 text-white font-semibold rounded-lg bg-gray-800 border border-gray-700 hover:bg-red-400 hover:text-gray-900 transition-all shadow-md disabled:cursor-not-allowed">Next &rarr;</button>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-4 font-semibold text-lg md:text-[24px] mt-10 mb-6 text-rose-100 border-t border-gray-700/50 pt-8'>&copy; Created by Arpit Verma 
        <span className='hidden md:inline text-gray-500'>||</span> <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/arpit-verma-687b3b332" className='className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1'>Linkedin</a> <span className='hidden md:inline text-gray-500'>||
          </span> <a target='_blank' rel="noreferrer" href="https://github.com/Arpit1825" className='hover:text-gray-400 text-white transition-colors flex items-center gap-1'><span>Github</span></a></div>
      </div>
    </div>
  )
}

export default App
