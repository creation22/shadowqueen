import React from 'react'
import Navabar from './Navabar'
import Background from './Background'
import { AnimatedShinyText } from "./ui/animated-shiny-text"

const Home = () => {
    return (
        <div>
            <Navabar/>

            <AnimatedShinyText text="The Shadow Queen" />
            <Background/>
        </div>
    )
}

export default Home
