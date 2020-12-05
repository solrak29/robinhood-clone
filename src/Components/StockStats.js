import React from 'react'
import StockList from './StockList'
import './StockStats.css'

export default function StockStats() {
    return (
        <div className='StockStatsContainer'>
            < StockList header='Stock'
                        stocks={['AAPL', 'MSFT', 'TSLA']}
                        shares={[200,50,100]} />
            < StockList header='List'
                        stocks={['AA']}
                        shares={[-1]} />
        </div>
    )
}

