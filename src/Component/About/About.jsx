import React from 'react'
import MainHeader from '../Main-Header/Main-Header'
import AboutUs from '../About-us/About-us'
import Team from '../Team/Team'
import { Helmet } from 'react-helmet'
export default function About() {
    return <>

        <Helmet >
            <title>About</title>
        </Helmet>

        <section className="about">

            <MainHeader page="About" />

            <AboutUs />
            <Team />


        </section>

    </>
}
