import BG from '../../assets/dn.webp'

const Footer = () => {
  return (
    <div className='bg-white w-full'>
        <div className="relative flex flex-col items-center justify-center pt-[120px] pb-[85px] z-[1]">
            <span className='absolute left-0 bottom-0 z-[-1] '><img src={BG} alt="" /></span>
            <div className='max-w-[1200px] w-[100%] mr-auto ml-auto'>
                
            </div>
        </div>
    </div>
  )
}

export default Footer