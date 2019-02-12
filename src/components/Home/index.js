import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar';
import Test from '../Test';


const Home = (props) => {
    return (
        <div>
            <Navbar />
            <Link to="/test" >Test</Link>
        </div>
    )
}



export default Home