import { useDispatch, useSelector } from "react-redux";
import { removeFromWatchlist } from "../features/watchlist/watchlistSlice";
import useCurrency from "../contexts/CurrencyContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Watchlist({ open, setOpen }) {
    const { items } = useSelector((state) => state.watchlist);
    const dispatch = useDispatch();
    const { symbol } = useCurrency();

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    />

                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="fixed right-0 top-0 w-[350px] h-screen bg-gray-800 shadow-2xl z-50 p-6 flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
                            <h2 className="text-2xl font-bold text-yellow-400">My Watchlist</h2>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-white text-2xl hover:text-red-500 transition-all"
                            >
                                ✕
                            </button>
                        </div>

                       <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar">
                            {items.length === 0 ? (
                                <p className="text-gray-400 text-center mt-10">Watchlist is empty!</p>
                            ) : (
                                items.map((coin, index) => (
                                    <motion.div
                                        key={coin.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex flex-col items-center bg-gray-700 rounded-2xl p-4 mb-5 border border-gray-600 relative"
                                    >
                                        <img src={coin.image?.large} alt={coin.name} className="w-20 mb-2" />
                                        <p className="text-white font-bold">{coin.name}</p>
                                        <p className="text-yellow-400">
                                            {symbol}{coin.market_data?.current_price?.usd?.toLocaleString()}
                                        </p>

                                        <button
                                            onClick={() => dispatch(removeFromWatchlist(coin.id))}
                                            className="mt-3 bg-red-600/20 text-red-500 hover:bg-red-600 hover:text-white px-6 py-1 rounded-lg text-sm font-semibold transition-all w-full border border-red-500/30"
                                        >
                                            Remove
                                        </button>
                                    </motion.div>
                                ))
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}