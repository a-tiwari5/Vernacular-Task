import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'
import "./app.scss"
const App = () => {
    return (
        <div className="homeContainer">
            <Sidebar />
            <Main />
        </div>
    )
}

export default App