import React from 'react'
import Header from '../components/Header'
import Hero from '../components/LandingPage/Hero'
import Companies from '../components/LandingPage/Companies'
import JobCategory from '../components/LandingPage/JobCategory'
import Working from '../components/LandingPage/Working'
import Testimonials from '../components/LandingPage/Testimonials'
import Subscribe from '../components/LandingPage/Subscribe'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main className='min-h-[100dvh] bg-mine-shaft-950 font-["poppins"]'>
        <Header />
        <Hero />
        <Companies />
        <JobCategory />
        <Working />
        <Testimonials />
        <Subscribe />
        <Footer />
    </main>
  )
}

export default Home