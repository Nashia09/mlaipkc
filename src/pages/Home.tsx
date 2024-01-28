import React from 'react'
import Hero from '../components/Hero'
import { About } from '../components/About'
import { Stats } from '../components/Stats'
import Video from '../components/Video'
import { BlogSection } from '../components/BlogSection'
import { Partners } from '../components/Partners'
import Hero2 from '../components/Hero2'

export const Home = () => {
  return (
    <>
        {/* <Hero /> */}
        <Hero2 />
        <About />
        <Stats />
        <Video />
        <BlogSection />
        <Partners />
    </>
  )
}
