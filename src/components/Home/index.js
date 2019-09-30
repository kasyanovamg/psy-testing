import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Home = (props) => {
    return (
        <div className="container home-container">
            {/*<div className="home-item"><Link to="/test" >Начать тренировку</Link></div>*/}
            {/*<div className="home-item"><Link to="/train" >Train</Link></div>*/}
          <Link to='/test/shulte'>Начать</Link>
        </div>
    )
};



export default Home