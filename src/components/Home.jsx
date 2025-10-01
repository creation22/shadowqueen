import React, { memo } from 'react'
import Navabar from './Navabar'
import Background from './Background'

const Home = memo(() => {
    return (
        <div>
            <Navabar/>
            <div className="">
                <Background/>
            </div>
        </div>
    )
})

export default Home
