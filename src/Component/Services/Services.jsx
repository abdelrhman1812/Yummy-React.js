import React from 'react'
import MainHeader from '../Main-Header/Main-Header'
import Service from '../Service/Service'
import Helmet from 'react-helmet'

export default function Services() {
    return <>

        <Helmet >
            <title>Services</title>
        </Helmet>

        <section className="services">

            <MainHeader page="Services" />

            <Service />
            <Service />

        </section>


    </>
}
