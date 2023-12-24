import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";
  
export default function Graph({arrayOfValues}) {
  return (
    <div className='graphContainer'>
    <LineChart width={800} height={400} data={arrayOfValues}>
      <XAxis dataKey="readings" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="ir" stroke="#8884d8" />
      <Line type="monotone" dataKey="temp" stroke="#82ca9d" />
      <Line type="monotone" dataKey="humid" stroke="#ffc658" />
      <Line type="monotone" dataKey="heart" stroke="#1ECBE1" />
      <Line type="monotone" dataKey="sound" stroke="#961EE1" />
      <Line type="monotone" dataKey="dist" stroke="#E1341E" />
    </LineChart>
  </div>
  )
}
