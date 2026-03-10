import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useEffect,useState } from 'react';
import Skeleton from './Skeleton';
import CoinInfo from './coinInfo';
import useCurrency from '../contexts/CurrencyContext';
function CoinDetail() {
    const {id}=useParams();//It is used to fetch value from url 
    const [coinData,setCoinData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [chartData,setChartData]=useState([]);
    const {symbol}=useCurrency();
    useEffect(()=>{
        setLoading(true);

        Promise.all([fetch(`https://api.coingecko.com/api/v3/coins/${id}`),
            fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${symbol}&days=24`)])
        .then(async([res1, res2]) => {
    const detailData = await res1.json();
    const chartRes = await res2.json();

    console.log("Full Chart Response:", chartRes); // <--- Ye check karo
    
    setCoinData(detailData);
    if(chartRes && chartRes.prices) {
        setChartData(chartRes.prices);
    }else{
        console.log("Api has blocked for 2 minutes (429)");
        
    }
    setLoading(false);
}).catch((err)=>{
            console.log(err);
            setLoading(false);
            
        });
    },[id]);
    console.log(chartData);
    
    if (loading) {
        
    return <Skeleton />
  }
    return (
        <div className=' relative flex flex-col md:flex-row gap-10 p-5 md:p-10 bg-gray-900 text-white min-h-screen items-start '>
           
           <Link to="/" className="absolute top-4 left-4 md:top-6 md:left-8 text-yellow-400 hover:text-yellow-300 font-bold text-lg md:text-xl transition-all duration-200 flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-600 shadow-md">
        <span>&larr;</span> Back
    </Link>
            {/* {left side} */}
             <div className='w-full md:w-1/3 flex flex-col items-center text-center mt-5'>
        <h1 className='text-[50px] font-bold text-yellow-400 capitalize drop-shadow-lg'>{coinData.name}</h1>
        <img src={coinData.image.large} alt={`${coinData.name} Image`} className='mt-6 w-48 md:w-64 drop-shadow-2xl'></img>
        <p className='text-2xl mt-8 font-semibold bg-gray-800 px-6 py-2 rounded-full border border-gray-600'>
            Rank: #{coinData.market_cap_rank}
        </p>
        <div className='mt-8 w-full flex justify-between px-4 md:px-0 md:flex-col md:items-center'>
            <p className='text-xl text-gray-400 font-medium'>Current Price</p>
            <p className='text-3xl font-bold text-white md:mt-2'>
                {symbol}{coinData.market_data.current_price.usd.toLocaleString()}
            </p>
        </div>

        {/* Market Cap Section */}
        <div className='mt-6 w-full flex justify-between px-4 md:px-0 md:flex-col md:items-center border-t border-gray-700 pt-6'>
            <p className='text-lg text-gray-400 font-medium'>Market Cap</p>
            <p className='text-2xl font-bold text-white md:mt-2'>
                {symbol}{coinData.market_data.market_cap.usd.toLocaleString()}
            </p>
        </div>


    </div>


    {/* {right side} */}
            <div className='w-full md:w-3/3 mt-8 md:mt-5'>
             <CoinInfo chartData={chartData}/>
                <div className='mt-4 bg-yellow-500 rounded-lg text-gray-800 p-5 mx-10 '>
    <h2 className='text-3xl font-extrabold mb-4 border-b-2 border-gray-800/20 pb-2'>About {coinData.name}</h2>
    <p className='text-lg md:text-xl leading-relaxed' dangerouslySetInnerHTML={{ __html: coinData.description.en }}></p>

</div>
        </div>
            </div>
        
    )   
}

export default CoinDetail
