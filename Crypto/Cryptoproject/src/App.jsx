import { useState } from 'react'
import './App.css'
import CoinCard from './components/CoinCard'
import Shimmercoins from './components/Shimmercoins'
import usefetchCoins from './hooks/usefetchCoins'

function App() {
  const [search,setSearch]=useState('');
  const {coins,loading}=usefetchCoins('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false');
  
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

    </div>
  )
}

export default App
