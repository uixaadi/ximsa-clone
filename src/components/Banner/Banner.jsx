
import Hero from "./Hero"
import RecycleIcon from '../../assets/features-icon/recycle.webp'
import PageBuilder from '../../assets/features-icon/pagebuilder.webp'
import StackIcon from '../../assets/features-icon/stack.webp'
import WooIcon from '../../assets/features-icon/woo.webp'


const Banner = () => {
  const features = [
    {
      icon: RecycleIcon,
      title: 'Added Slider Revolution',
    },
    {
      icon: PageBuilder,
      title: 'Elementor Page Builder',
    },
    {
      icon: StackIcon,
      title: 'Extra care of Elite Author',
    },
    {
      icon: WooIcon,
      title: 'Woocommerce Ready',
    }
  ]
  return (
    <div>
        <Hero />
        <div className="features flex items-center justify-center w-full bg-white h-full">
          <div className="flex flex-col lg:flex-row items-start justify-center pt-10 pb-10 lg:pt-64 lg:pb-16 max-w-[1200px]">
              {features.map((item, index) => (
                <div key={index} className="flex items-center mb-5 mr-5">
                  <img className="mr-5 rotate-on-hover" src={item.icon} alt="" />
                  <h4 className="font-bold text-lg">{item.title}</h4>
                </div>
              ))}
          </div>
        </div>
    </div>
  )
}

export default Banner