
import backgroundImage from '../../assets/icon/bg-layer.png'
import Banner from './Banner'
import Navbar from './Navbar'
function Header() {
  return (
    <div className='w-full min-h-[700px] relative' style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
      <section >
      <Navbar />
       <Banner />
      </section>
      
    </div>
  )
}

export default Header
