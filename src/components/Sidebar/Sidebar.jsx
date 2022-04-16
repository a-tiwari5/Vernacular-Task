import React from 'react'
import "./sidebar.scss"
import ViewListIcon from '@mui/icons-material/ViewList';

const Sidebar = () => {
    return (
        <div className='sidebar d-flex flex-column align-items-center'>
            <div className="logo mt-4">
                <h3>Mentor <span style={{ color: "red" }}>Plus</span></h3>
            </div>
            <ViewListIcon className='icon' />
            <div className='options'>
                <div className="items d-flex align-items-center justify-content-center">
                    <span>Home</span>
                </div>
                <div className="items d-flex align-items-center justify-content-center">
                    <span>Profile</span>
                </div>
                <div className="items d-flex align-items-center justify-content-center">
                    <span></span>
                </div>
                <div className="items d-flex align-items-center justify-content-center">
                    <span></span>
                </div>
                <div className="items d-flex align-items-center justify-content-center">
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar