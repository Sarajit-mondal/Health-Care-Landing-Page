import { GoArrowUpRight } from "react-icons/go";
import online from '../../assets/media/onlineDoctor.png'
import pasant  from '../../assets/media/pasant.png'
function OnlineDoctor() {
  return (
    <div className='-mt-20 flex flex-col md:flex-row gap-10 md:gap-32 h-[456px]'>
    {/* left */}
    <div className='md:relative md:w-[568px] w-full'>
        <img src={online} alt="" className='md:absolute w-full md:h-[415px] rounded-2xl'/>
        {/* card */}
        <div className='md:absolute z-10 bg-[#343268CC] bottom-16 left-5 md:w-96 text-left px-5 space-y-2 py-7 text-white rounded-3xl flex items-end gap-4'>
           <div>
           <h3>Online Doctor Meet</h3>
           <p>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
           </div>
            <button className='bg-gold p-2 rounded-full'><GoArrowUpRight className='text-xl font-semibold text-white'/></button>
        </div>
    </div>
    {/* right */}
    <div className='static md:relative md:w-[568px] w-full'>
        <img src={pasant} alt="" className='md:absolute w-full md:h-[415px] rounded-2xl'/>
        {/* card */}
        <div className='static md:absolute z-10 bg-[#343268CC] bottom-16 left-5 md:w-96 text-left px-5 space-y-2 py-7 text-white rounded-3xl flex items-end gap-4'>
           <div>
           <h3>Consultancy your health</h3>
           <p>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision </p>
           </div>
            <button className='bg-gold p-2 rounded-full'><GoArrowUpRight className='text-xl font-semibold text-white'/></button>
        </div>
    </div>
</div>
  )
}

export default OnlineDoctor
