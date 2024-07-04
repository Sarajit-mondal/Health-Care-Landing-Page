import React from 'react'
import Navbar from '../component/Header/Navbar'
import Header from '../component/Header/Header'
import Misstion from '../component/OurMission/Misstion'

function HomePage() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Mission */}
      <section>
        <Misstion />
      </section>
    </div>
  )
}

export default HomePage
