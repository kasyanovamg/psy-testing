import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Home = (props) => {
    return (
        <div className="container home-container">
            <div className="home-item"><Link to="/test" >Test</Link></div>
            <div className="home-item"><Link to="/train" >Train</Link></div>
        </div>
    )
}



export default Home