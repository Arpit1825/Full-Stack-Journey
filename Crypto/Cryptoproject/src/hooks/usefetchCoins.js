import {useState,useEffect} from 'react';

const usefetchCoins=(apiUrl)=>{
     const [coins,setCoins] =useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    const usefetchCoins = async () => {
      try {
     
        const response = await fetch(apiUrl);
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
       },2000)
        
      } catch (error) {
        console.error("Data fething problem occuring:", error);
      }
    };

    usefetchCoins(); 
  }, [apiUrl]);
  return {coins,loading};
};

export default usefetchCoins;