import React from 'react'
import "./date.scss"

const Date = ({ data, currentDate }) => {
    return (
        <div className='date d-flex flex-column align-items-center' onClick={() => currentDate(data)}>
            <span className='mt-1'>{data.day}</span>
            <span className="Date">{data.date}</span>
            <span>{data.month}</span>
        </div>
    )
}

export default Date