import React from 'react'
import Image from "next/image"
import classes from "./hero.module.css"
const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
            <Image src="/introvert-event.jpg" alt="My Image" width={300} height={300}/>
            </div>
            <h1>Hi, I am Haroon</h1>
            <p>I blog about web development - especially about front-end development with React and Redux</p>
        </section>
    )
}

export default Hero
