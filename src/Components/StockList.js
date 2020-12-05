import React from 'react'
import StockItem from './StockItem'
import './StockList.css'
import StockStatsHeader from './StockStatsHeader'

export default function StockList(props) {
    return (
        <div>
           <StockStatsHeader label={props.header} />
           <StockItem /> 
        </div>
    )
}
