import BannerOne from '../../assets/hero-images/banner1.png'
import BannerTwo from '../../assets/hero-images/banner2.png'
import BannerThree from '../../assets/hero-images/banner3.png'
import BannerFour from '../../assets/hero-images/banner4.png'
import BannerFive from '../../assets/hero-images/banner5.png'

const Hero = () => {

  return (
    <div className='flex flex-col items-center justify-center h-full lg:h-[1140px] lg:mt-[-180px]'>
      <div className="flex w-full h-full flex-row items-center justify-center top-52 gap-6 lg:relative overflow-x-clip">
      <div className='banner-one hidden lg:block absolute z-10 left-[-60px] top-[280px]'>
        <img src={BannerOne} alt="#" />
      </div>
      <div className="hero-text flex flex-col justify-center items-center max-w-[570px] p-12  mt-20 mb-12 lg:p-0">
        <h1 className='grad-text text-8xl lg:text-[100px] font-bold'>2.4</h1>
        <span className='bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 text-transparent bg-clip-text font-bold text-2xl text-center'>Many Website, One Solution</span>
        <h2 className='pt-8 text-4xl lg:text-6xl text-center font-bold'>Multipurpose Wordpress Theme</h2>
        <div className="flex gap-4 pt-12">
          <button
            className='button-ghost flex items-center justify-center relative rounded-full bg-white  w-[150px] h-[45px] lg:w-[225px] lg:h-16 text-base text-black hover:text-white z-10 font-bold shadow-md' href="#">
            Stunning Demos
            <div className="gradient-slide" />
          </button>
          <button 
            className='button-ghost flex items-center justify-center relative rounded-full bg-white  w-[150px] h-[45px] lg:w-[225px] lg:h-16 text-base text-black hover:text-white z-10 font-bold shadow-md' href="#">
            Theme Features
            <div className="gradient-slide" />
          </button>
        </div>
      </div>
      <div className='banner-two hidden lg:block absolute right-[-80px] top-[200px]'>
        <img src={BannerTwo} alt="#" />
      </div>
      </div>
      <div className="hidden lg:flex w-full h-full items-center relative top-72 justify-between gap-12 p-6 overflow-hidden">
        <img className='banner-three absolute left-6' src={BannerThree} alt="" />
        <img className='banner-four absolute left-[32%] w-[40%]' src={BannerFour} alt="" />
        <img className='banner-five absolute right-[-120px]' src={BannerFive} alt="" />
      </div>
    </div>
  )
}

export default Hero