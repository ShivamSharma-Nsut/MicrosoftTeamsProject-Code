import React from 'react'
import App from './App'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Doc from './components/Doc'
import {HashRouter as Router, Route} from 'react-router-dom';
function Home() {
    return (
        <Router>
            <Navbar/>
            <Route path='/' exact component={App} />
            <Route path='/MicrosoftTeamsProject' component={App} />
            <Route path='/about' component={About} />
            <Route path='/doc' component={Doc} />
            <Footer/>
        </Router>
    )
}

export default Home
