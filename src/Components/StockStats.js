import React from 'react'
import StockList from './StockList'
import './StockStats.css'

export default function StockStats() {
    return (
        <div className='StockStats'>
            <div className='StockStats-container'>
                < StockList header='Stock' />
                < StockList header='List' />
            </div>
        </div>
    )
}

