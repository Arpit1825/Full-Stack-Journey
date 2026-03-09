import React, { createContext ,useContext,useEffect,useState} from 'react'

export const CurrencyContext=createContext();

export const CurrencyProvider=({children})=>{
    const [currency,setCurrency]=useState("usd");
    const [symbol,setSymbol]=useState("$");

    useEffect(()=>{
        if(currency=="inr"){
        setSymbol("₹");
    }else if(currency=="usd"){
        setSymbol("$");
    }
    },[currency])

    return (
        <CurrencyContext.Provider value={{currency,setCurrency,symbol}}>
            {children}
        </CurrencyContext.Provider>
    )
}

const  useCurrency=()=>{
    return useContext(CurrencyContext);
}

export default useCurrency