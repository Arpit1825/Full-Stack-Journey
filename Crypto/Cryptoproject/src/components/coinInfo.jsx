import React from 'react';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

function CoinInfo({chartData}) {



    if (!chartData || chartData.length === 0) {

    return null;

  }



    const formattedData=chartData.map((item)=>{

        return {time: new Date(item[0]).toLocaleDateString([],{hour:'2-digit',minute:'2-digit',seconds:'2-digit'}),

        price:item[1]};



    });

    return (

    <div className="w-full h-[400px] mt-8 p-4 bg-gray-800/30 rounded-xl border border-gray-700 shadow-lg">

      <ResponsiveContainer width="100%" height="100%">

        <LineChart data={formattedData}>

          {/* X aur Y Axis */}

          <XAxis dataKey="time" hide={true} />

          <YAxis domain={['auto', 'auto']} hide={true} />

         

          {/* When mouse comes on line tab Tooltip shows */}

          <Tooltip

            contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}

            itemStyle={{ color: '#FBBF24' }} // Yellow color for price

            labelStyle={{ color: '#9CA3AF' }} // Grey color for time

          />

         

          {/* Line chart yellowish golden */}

          <Line

            type="monotone"

            dataKey="price"

            stroke="#FBBF24" // Tailwind yellow-400

            strokeWidth={2}

            dot={false} // ignoring Dots

          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}



export default CoinInfo