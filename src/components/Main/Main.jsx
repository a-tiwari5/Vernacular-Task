import React, { useEffect, useState } from 'react'
import "./main.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Date from '../Date/Date';
import Slot from '../Slot/Slot';
import axios from 'axios';
import moment from 'moment';


const Days = [
    {
        day: "Mon",
        date: 22,
        month: "Feb",
        format: "22/03/22"
    },
    {
        day: "Tue",
        date: 23,
        month: "Feb",
        format: "23/03/22"
    },
    {
        day: "Wed",
        date: 24,
        month: "Feb",
        format: "24/03/22"
    },
    {
        day: "Thu",
        date: 25,
        month: "Feb",
        format: "25/03/22"
    },
    {
        day: "Fri",
        date: 26,
        month: "Feb",
        format: "26/03/22"
    },
    {
        day: "Sat",
        date: 27,
        month: "Feb",
        format: "27/03/22"
    },
    {
        day: "Sun",
        date: 28,
        month: "Feb",
        format: "28/03/22"
    }
]



const Main = () => {
    const [selectedDate, setSelectedDate] = useState({});
    const [slots, setSlots] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
            const res = await axios.get("https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json")
            return res
        }
        fetchData().then((data) => {
            const dates = data.data;
            const result = dates.map((date) => {
                return moment.utc(date.date).format('DD/MM/YY');
            })
            let matchedDate = "";
            for (let i = 0; i < result.length; i++) {
                if (result[i] === selectedDate.format) {
                    matchedDate = result[i];
                    setSlots(data.data[i].available)
                }
            }
        })
    }, [selectedDate])


    const currentDate = (data) => {
        setSelectedDate(data)
    }

    return (
        <div className='mainContainer mt-5'>
            <div className="top my-3">
                <hr />
                <div className="bookDemoSlot">
                    <ArrowBackIcon className='icon' />
                    <h3>Book Demo session Slot</h3>
                    <div className="colorBottom">
                    </div>
                </div>
            </div>
            <div className="middle">
                <h6 className='fs-4 fw-bold my-2'>Select Date</h6>
                <div className="dates d-flex">
                    {
                        Days.map((data) => {
                            return (
                                <Date key={data.date} data={data} currentDate={currentDate} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="bottom">
                <h6 className='fs-4 fw-bold my-3'>Select Slot</h6>
                <div className="slotTiming d-flex">
                    {
                        slots.map((data) => {
                            return <Slot data={data} />
                        })
                    }

                </div>
                <div className="pay ">
                    <span>Proceed to Pay</span>
                </div>
            </div>
        </div>
    )
}

export default Main