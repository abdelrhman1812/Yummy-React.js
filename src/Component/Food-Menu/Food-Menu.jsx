import React from 'react'
import MainHeader from '../Main-Header/Main-Header'
import Menu from '../Menu/Menu'
import Helmet from 'react-helmet'
export default function FoodMenu() {
    return <>

        <Helmet >

            <title>Food Menue</title>
        </Helmet>


        <section className="foodMenue">

            <MainHeader page="Food Menue" />

            <Menu num='25' numC='14' />


        </section>
    </>
}
