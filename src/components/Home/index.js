import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar';

const Home = (props) => {
    return (
        <div>
            <Navbar />
            <Link to="/test" >Test</Link>
            <Link to="/train" >Train</Link>
        </div>
    )
}



export default Home