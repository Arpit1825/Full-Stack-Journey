import { useState } from 'react'
import './App.css'
import CoinCard from './components/CoinCard'
import Shimmercoins from './components/Shimmercoins'
import usefetchCoins from './hooks/usefetchCoins'
import useCurrency from './contexts/CurrencyContext'
import Watchlist from './components/Watchlist'
import { Link } from 'react-router-dom'
import SplashCursor from './components/SplashCursor'
import {motion,AnimatePresence} from 'framer-motion'
function App() {
  const [search,setSearch]=useState('');
  const {currency,setCurrency}=useCurrency();
  const [page,setPage]=useState(1);
  const {coins,loading}=usefetchCoins(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=25&page=${page}&sparkline=false`);
  const {symbol,setSymbol}=useCurrency();
  const [open,setOpen]=useState(false);

  return (
    <div className=" relative min-h-screen p-6 overflow-hidden">
     {/* <SplashCursor 
        SPLAT_FORCE={8000} 
        DENSITY_DISSIPATION={5.8} 
        PRESSURE_ITERATIONS={15} 
      /> */}
     
      <div className="fixed inset-0 z-0 bg-[url('https://i.pinimg.com/736x/f9/26/94/f92694c467846d3690ef4008a7311d84.jpg')] 
      bg-cover bg-center bg-no-repeat blur-xs scale-110"></div>
      
      <div className="fixed inset-0 z-0 bg-gray-900/70"></div>

     
      <div className="relative z-10 max-w-10xl mx-auto">
       <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-between items-center gap-4 mb-8 bg-gray-900/40 p-4 rounded-xl border border-gray-700/50 backdrop-blur-md shadow-2xl"
        >
          <div className='flex-1 min-w-[250px]'>
            <input 
              type="text" 
              placeholder=' Search Coins...'
              className="text-white border border-gray-700 bg-gray-800/80 rounded-lg w-full h-[45px] px-4 outline-none focus:border-yellow-400 transition-all shadow-inner"
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
            />
          </div>

          <div className="flex items-center focus:border-emrald-300 gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(true)}
              className="bg-yellow-400  text-gray-900 px-6 py-2.5 rounded-lg font-bold hover:bg-yellow-500 transition-all shadow-lg"
            >
              ⭐ <span className='hidden md:inline'>Watchlist</span>
            </motion.button>
        <motion.select 
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95}}
              className="bg-gray-800 text-white border border-white/10 px-4 py-3 rounded-xl outline-none cursor-pointer focus:ring-2 focus:ring-red-500/50 transition-all font-bold"
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="inr">INR</option>
              <option value="usd">USD</option>
            </motion.select>
          </div>
        </motion.div>
        <motion.h1 className='text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 md:text-6xl mb-10 font-black font-extrabold'>Crypto Tracker </motion.h1>
        <Watchlist open={open} setOpen={setOpen} />
        <div className='grid gap-4'>
         <AnimatePresence mode='wait'>
            {loading ? (
              <motion.div 
                key="shimmer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {Array(10).fill(0).map((_, i) => <Shimmercoins key={i}/>)}
              </motion.div>
            ) : (
              <motion.div 
                key="content"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { staggerChildren: 0.1 } 
                  }
                }}
              >
                {coins
                  .filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
                  .map((coin) => (
                    <motion.div 
                      key={coin.id}
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1 }
                      }}
                    >
                      <CoinCard coinData={coin} currencySymbol={symbol} />
                    </motion.div>
                  ))
                }
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center items-center gap-6 mt-12 pb-10"
        >
          <motion.button 
            whileHover={{ x: -5 }}
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="text-white px-5 py-3 font-bold rounded-lg bg-gray-800 border border-gray-700 hover:bg-red-400 hover:text-gray-900 disabled:opacity-20 transition-all shadow-md"
          >
            &larr; Prev
          </motion.button>
          
          <span className='text-2xl text-red-400 font-black px-4'>{page}</span>
          
          <motion.button 
            whileHover={{ x: 5 }}
            onClick={() => setPage(page + 1)}
            disabled={page === 25}
            className="text-white px-5 py-3 font-bold rounded-lg bg-gray-800 border border-gray-700 hover:bg-red-400 hover:text-gray-900 disabled:opacity-20 transition-all shadow-md"
          >
            Next &rarr;
          </motion.button>
        </motion.div>

        {/* Footer */}
        <footer className='flex flex-wrap justify-center items-center gap-4 font-semibold text-lg md:text-[24px] mt-10 mb-6 text-rose-100 border-t border-gray-700/50 pt-8'>
          &copy; Created by Arpit Verma 
          <span className='hidden md:inline text-gray-500'>||</span> 
          <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/arpit-verma-687b3b332" className='text-blue-400 hover:text-blue-300 transition-colors'>Linkedin</a> 
          <span className='hidden md:inline text-gray-500'>||</span> 
          <a target='_blank' rel="noreferrer" href="https://github.com/Arpit1825" className='text-white hover:text-gray-400 transition-colors'>Github</a>
        </footer>
      </div>
    </div>
       

  )
}

export default App
