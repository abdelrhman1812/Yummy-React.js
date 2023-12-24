import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Nav-bar/Nav-bar'
import Footer from '../Footer/Footer'
export default function Layout() {
    return <>
        <NavBar />


        <Outlet>

        </Outlet>


        <Footer />
    </>
}
