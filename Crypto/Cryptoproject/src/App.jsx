import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CoinCard from './components/CoinCard'

function App() {
  const dummyCoins = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 51230.50, change: 2.5 },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 2950.20, change: -1.2 },
  { id: 'tether', name: 'Tether', symbol: 'USDT', price: 1.00, change: 0.01 },
  { id: 'bnb', name: 'BNB', symbol: 'BNB', price: 380.45, change: 1.5 },
  { id: 'solana', name: 'Solana', symbol: 'SOL', price: 105.80, change: 5.8 },
  { id: 'ripple', name: 'XRP', symbol: 'XRP', price: 0.55, change: -0.8 },
  { id: 'usdc', name: 'USDC', symbol: 'USDC', price: 1.00, change: 0.00 },
  { id: 'cardano', name: 'Cardano', symbol: 'ADA', price: 0.62, change: 3.2 },
  { id: 'avalanche', name: 'Avalanche', symbol: 'AVAX', price: 38.90, change: 4.1 },
  { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE', price: 0.085, change: -2.5 },
  { id: 'polkadot', name: 'Polkadot', symbol: 'DOT', price: 7.80, change: 1.1 },
  { id: 'chainlink', name: 'Chainlink', symbol: 'LINK', price: 19.50, change: 6.7 },
  { id: 'polygon', name: 'Polygon', symbol: 'MATIC', price: 0.95, change: -1.5 },
  { id: 'tron', name: 'TRON', symbol: 'TRX', price: 0.14, change: 0.5 },
  { id: 'shiba-inu', name: 'Shiba Inu', symbol: 'SHIB', price: 0.000009, change: -3.4 },
  { id: 'litecoin', name: 'Litecoin', symbol: 'LTC', price: 72.40, change: 2.1 },
  { id: 'bitcoin-cash', name: 'Bitcoin Cash', symbol: 'BCH', price: 265.80, change: 1.8 },
  { id: 'uniswap', name: 'Uniswap', symbol: 'UNI', price: 11.20, change: 8.5 },
  { id: 'cosmos', name: 'Cosmos', symbol: 'ATOM', price: 10.40, change: -0.9 },
  { id: 'stellar', name: 'Stellar', symbol: 'XLM', price: 0.11, change: 0.4 },
  { id: 'monero', name: 'Monero', symbol: 'XMR', price: 120.50, change: -1.1 },
  { id: 'ethereum-classic', name: 'Ethereum Classic', symbol: 'ETC', price: 26.70, change: 3.3 },
  { id: 'filecoin', name: 'Filecoin', symbol: 'FIL', price: 8.10, change: 12.5 },
  { id: 'internet-computer', name: 'Internet Computer', symbol: 'ICP', price: 13.50, change: -2.2 },
  { id: 'aptos', name: 'Aptos', symbol: 'APT', price: 9.80, change: 4.6 },
  { id: 'near', name: 'NEAR Protocol', symbol: 'NEAR', price: 3.90, change: 5.1 },
  { id: 'optimism', name: 'Optimism', symbol: 'OP', price: 3.70, change: -1.8 },
  { id: 'arbitrum', name: 'Arbitrum', symbol: 'ARB', price: 1.90, change: 2.4 },
  { id: 'vechain', name: 'VeChain', symbol: 'VET', price: 0.045, change: 1.2 },
  { id: 'maker', name: 'Maker', symbol: 'MKR', price: 2100.00, change: -0.5 },
  { id: 'the-graph', name: 'The Graph', symbol: 'GRT', price: 0.28, change: 7.8 },
  { id: 'stacks', name: 'Stacks', symbol: 'STX', price: 2.60, change: 15.2 },
  { id: 'render', name: 'Render', symbol: 'RNDR', price: 7.20, change: 9.4 },
  { id: 'thorchain', name: 'THORChain', symbol: 'RUNE', price: 5.40, change: -3.1 },
  { id: 'injective', name: 'Injective', symbol: 'INJ', price: 34.50, change: 2.9 },
  { id: 'fantom', name: 'Fantom', symbol: 'FTM', price: 0.45, change: 1.1 },
  { id: 'sui', name: 'Sui', symbol: 'SUI', price: 1.60, change: 4.2 },
  { id: 'sei', name: 'Sei', symbol: 'SEI', price: 0.85, change: -2.7 },
  { id: 'celestia', name: 'Celestia', symbol: 'TIA', price: 17.30, change: 6.1 },
  { id: 'polygon-ecosystem-token', name: 'POL', symbol: 'POL', price: 0.92, change: 0.3 },
  { id: 'mantle', name: 'Mantle', symbol: 'MNT', price: 0.98, change: 1.4 },
  { id: 'kaspa', name: 'Kaspa', symbol: 'KAS', price: 0.16, change: 5.5 },
  { id: 'bittensor', name: 'Bittensor', symbol: 'TAO', price: 620.00, change: -4.5 },
  { id: 'helium', name: 'Helium', symbol: 'HNT', price: 9.20, change: 8.1 },
  { id: 'algorand', name: 'Algorand', symbol: 'ALGO', price: 0.19, change: -0.7 },
  { id: 'flow', name: 'Flow', symbol: 'FLOW', price: 1.10, change: 2.2 },
  { id: 'theta', name: 'Theta Network', symbol: 'THETA', price: 1.80, change: 3.5 },
  { id: 'sand', name: 'The Sandbox', symbol: 'SAND', price: 0.52, change: -1.4 },
  { id: 'mana', name: 'Decentraland', symbol: 'MANA', price: 0.48, change: 1.0 },
  { id: 'chiliz', name: 'Chiliz', symbol: 'CHZ', price: 0.12, change: 0.6 }
];
const [search,setSearch]=useState('');
  return (
    <div className="p-8 bg-gray-900 min-h-screen"> 
    <div className='mb-6'>
      <input type="text" placeholder='  Search Coins'
       className=' text-white border border-gray-700 bg-gray-800 rounded-lg w-[300px] h-[45px] mx-2'
       value={search} onChange={(e)=>setSearch(e.target.value)}>
      </input>
    </div>
      <h1 className='text-[40px] text-red-400 font-bold mb-8'>Crypto Tracker Test</h1>

  <div>
    {dummyCoins.filter((coin)=>{
      return coin.name.toLowerCase().includes(search.toLowerCase())}).map((coin) => {
  
  return <CoinCard key={coin.id} coinData={coin} />
})}
  </div>
  </div>
  )
}

export default App
