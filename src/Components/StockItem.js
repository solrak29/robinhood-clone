import React from 'react'
import './StockItem.css'

export default function StockItem(props) {
        return (
            <div className='StockItem'>
                <div className='StockAndPos'> 
                    <p class='StockName'>{props.stock}</p>
                    <p class='Position'>{props.shares}</p>
                </div>
                <div className='StockGraph'>
                    <img src="../assets/stock.svg" alt="stock Logo" />
                </div>
                <div className='StockPrice'>
                    <p className='price'>$116.00</p>
                    <p className='percent'>+1.84%</p>
                </div>
            </div>
        )
    }