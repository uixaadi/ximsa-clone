import BG from '../../assets/dn.webp'
import Author from '../../assets/author.webp'
import ENLogo from '../../assets/en2.webp'

const Footer = () => {
  return (
    <div className='bg-white w-full'>
        <div className="relative flex flex-col items-center justify-center pt-[120px] pb-[85px] z-[1]">
            <span className='absolute left-0 bottom-0 z-[-1] '><img src={BG} alt="" /></span>
            <div className='max-w-[1200px] w-[100%] mr-auto ml-auto'>
                <div className="flex flex-col">
                  <div className="text-center flex items-center justify-center">
                    <img src={Author} alt="" />
                  </div>
                  <div className='mr-auto ml-auto mt-8 max-w-[650px] text-center'>
                    <h2 className='text-black font-bold text-4xl lg:text-7xl pb-5'>
                      Download Ximsa Wordpress Now!
                    </h2>
                    <p className='font-bold text-xl pb-5'>
                    A single license includes free lifetime updates!
                    </p>
                    <div className='thx-footer-btn flex justify-center'>
                      <a className='lg:w-[300px] lg:h-[85px] flex items-center justify-center rounded-full w-[280px] h-16 text-base text-white font-bold' href="">
                        <img className='mr-2' src={ENLogo} alt="" />
                        Buy for only $29
                      </a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer