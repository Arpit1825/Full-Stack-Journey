import { useDispatch, useSelector } from "react-redux"
import { removeFromWatchlist } from "../features/watchlist/watchlistSlice";
import useCurrency from "../contexts/CurrencyContext";

export default function Watchlist({ open, setOpen }) {
    const {items}=useSelector((state)=>state.watchlist)
    const dispatch=useDispatch();
    const {symbol}=useCurrency();
    if(!open){
        return null;
    }
    return (
        <div className="fixed right-0 top-0 w-[350px] h-screen bg-gray-800 shadow-2xl z-50 p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
                <h2 className="text-2xl font-bold text-yellow-400">My Watchlist</h2>
                <button 
                    onClick={() => setOpen(false)} 
                   className="mt-3 bg-red-600/20 text-red-500 hover:bg-red-600 hover:text-white px-6 py-1 rounded-lg text-sm font-semibold transition-all "
                >
                    ✕
                </button>
            </div>

            <div className="flex-1 overflow-y-auto">
                {items.length === 0 ? (
                    <p className="text-gray-400 text-center mt-10">Watchlist is empty!</p>
                ) : (
                    items.map((coin) => (
                        <div key={coin.id} className="flex flex-col items-center bg-gray-700 rounded-2xl p-4 mb-5 border border-gray-600 relative">
                            {/* Coin Image */}
                            <img src={coin.image?.large} alt={coin.name} className="w-20 mb-2" />
                            
                            {/* Coin Name & Price */}
                            <p className="text-white font-bold">{coin.name}</p>
                            <p className="text-yellow-400">
                               {symbol}{coin.market_data?.current_price?.usd?.toLocaleString()}
                            </p>

                            {/* Remove Button */}
                           <button 
                                onClick={() => dispatch(removeFromWatchlist(coin.id))}
                                className="mt-3 bg-red-600/20 text-red-500 hover:bg-red-600 hover:text-white px-6 py-1 rounded-lg text-sm font-semibold transition-all w-full border border-red-500/30"
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}





