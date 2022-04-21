import Image from 'next/image'

import classes from './hero.module.css'

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src='/images/site/oleg.jpg'
                    alt='ME!!!'
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi im Oleg</h1>
            <p>Blog about web dev</p>
        </section>
    )
}

export default Hero