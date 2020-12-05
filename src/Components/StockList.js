import React from 'react'
import StockItem from './StockItem'
import './StockList.css'
import StockStatsHeader from './StockStatsHeader'

export default function StockList(props) {
    if (props.shares[0] == -1) {
        return (
            <div class='StockListContainer'>
               <StockStatsHeader label={props.header} />
               {props.stocks.map((val,index) => {
                   return <StockItem stock={val} /> 
               })}
            </div>
        )
    } else {

    return (
        <div class='StockListContainer'>
           <StockStatsHeader label={props.header} />
           {props.stocks.map((val,index) => {
               return <StockItem stock={val} 
                                 shares={props.shares[index]} /> 
           })}
        </div>
    )
    }
}
