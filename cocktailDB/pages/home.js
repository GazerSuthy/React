import React from 'react'
import {NavBar} from '../components/navbar' //{} for named exports
import {DisplayUi} from '../components/display'

const Home = () => {
    return (
        <div>
            <NavBar/>
            <DisplayUi/>
        </div>
    )
}

export default Home
