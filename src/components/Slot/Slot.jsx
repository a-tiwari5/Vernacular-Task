import React from 'react'
import "./slot.scss"

const Slot = ({ data }) => {
    if (data.min) {
        const time = (data.hour * 60) + data.min;
        var hours = (time / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
    }
    return (
        <div className='slot d-flex align-items-center justify-content-center'>
            <span >{
                data.min ? `${Math.floor(hours)}: ${minutes}-${Math.ceil(hours)}: ${minutes} PM` : `${data.hour} PM- ${data.hour + 1} PM`
            }</span>
        </div>
    )
}

export default Slot