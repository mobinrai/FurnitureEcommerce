import { Outlet } from 'react-router'
import Header from './shared/Header'
import Footer from './shared/Footer'
import {Stack } from '@mui/material'
import Hero from './shared/Hero'
import Services from './shared/Services'

const MainLayout = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <Stack>
                <Outlet/>
            </Stack>
            <Services/>
            <Footer/>
        </>
    )
}

export default MainLayout