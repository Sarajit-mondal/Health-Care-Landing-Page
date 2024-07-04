import React from 'react'
import Navbar from '../component/Header/Navbar'
import Header from '../component/Header/Header'
import Misstion from '../component/OurMission/Misstion'
import Empower from '../component/empower/Empower'
import OnlineDoctor from '../component/Doctor/OnlineDoctor'
import Ratting from '../component/ratting/Ratting'
import Question from '../component/question/Question'
import Footer from '../component/footer/Footer'

function HomePage() {
  return (
    <div > 
      {/* Header */}
      <Header />
      {/* Mission */}
      <section>
        <Misstion />
      </section>
      <section className='pt-32 md:pt-0'>
      <Empower />
      </section>
      <section>
        <OnlineDoctor />
      </section>
      <section className='pt-[640px] md:pt-0'>
        <Ratting />
      </section>
      <section>
        <Question />
      </section>
      <Footer />
    </div>
  )
}

export default HomePage
