import { createSlice } from "@reduxjs/toolkit"

export const watchlistSlice=createSlice({
    name:"watchlist",
    initialState:{
        items:JSON.parse(localStorage.getItem("watchlist")) || [],
    },
    reducers:{
        addTowatchlist:(state,action)=>{
            const itemexists=state.items.find((items)=>items.id===action.payload.id);
           if(!itemexists){
             state.items.push(action.payload);
             console.log("Watchlist Updated:", state.items);
             localStorage.setItem("watchlist",JSON.stringify(state.items))
           }else{
            alert("Already present in your watchlist")
            
           }
        },
        removeFromWatchlist:(state,action)=>{
            state.items=state.items.filter((items)=>(items.id!==action.payload));
            localStorage.setItem("watchlist",JSON.stringify(state.items));
        },
    },
})

export const {addTowatchlist,removeFromWatchlist}=watchlistSlice.actions;

export default watchlistSlice.reducer;