import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons'
import './StockStatsHeader.css'

export default function StockStatsHeader(props) {
    return (
        <div className='header-container'>
            <p>{props.label}</p>
            < FontAwesomeIcon icon={faEllipsisH} />
        </div>
    )
}
