import { Star1 } from 'iconsax-react'
import EVLogo from '../../assets/testimonials/ev.webp'

const TestimonialCard = () => {
  return (
    <div className="m-[15px] pt-10 pb-10 pl-[30px] pr-[30px] bg-white flex float-left">
        <div className='w-16 h-20 mr-4'>
            <img src={EVLogo} alt="EVLogo" />
        </div>
        <div className='w-[250px]'>
            <ul>
                <li className='inline-block'><Star1 size="20" color="#328eff" variant="Bold"/></li>
                <li className='inline-block'><Star1 size="20" color="#328eff" variant="Bold"/></li>
                <li className='inline-block'><Star1 size="20" color="#328eff" variant="Bold"/></li>
                <li className='inline-block'><Star1 size="20" color="#328eff" variant="Bold"/></li>
                <li className='inline-block'><Star1 size="20" color="#328eff" variant="Bold"/></li>
            </ul>
            <div className='mt-2 mb-2 text-sm text-[#777777]'>
            Nice theme, it has a good design, good theme builder and great support. 
            </div>
            <div  className='text-[#999999]'>
                <span className='font-bold text-[#222222]'>NCBTS</span> - Authore
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard