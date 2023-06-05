import Laptop from '../../assets/ultimateshopping/mokup.png'
import BgCircle from '../../assets/ultimateshopping/mac-sh.webp'
import Cart from '../../assets/ultimateshopping/cart.webp'
import Checkout from '../../assets/ultimateshopping/checkout.webp'
import Basket from '../../assets/ultimateshopping/basket.webp'

const UltimateShopping = () => {

  const ShopItem = [
    {
      icon: Cart,
      title: 'Shop'
    },
    {
      icon: Basket,
      title: 'Shopping Cart'
    },
    {
      icon: Checkout,
      title: 'Check out'
    }
  ]

  return (
    <div className='flex flex-col lg:flex-row justify-center m-0 bg-white'>
    <div className='flex flex-col lg:flex-row m-8 max-w-[1200px] items-center justify-center'>
        <div className='max-w-[100%] w-[100%] lg:w-[66%] mb-8 relative z-10'>
          <div className='fade-in-left z-10'>
            <img src={Laptop} alt="" />
          </div>
          <div className='absolute left-0 right-0 top-10 z-[-1]'>
            <img src={BgCircle} alt="" />
          </div>
        </div>
        <div className="flex flex-col max-w-[380px]">
          <div className="flex flex-col">
            <h6 className="bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 text-transparent bg-clip-text font-bold text-xl mb-0">Woocommerce Ready</h6>
            <h2 className="text-4xl lg:text-5xl font-bold mb-9">Ultimate Shopping!</h2>
          </div>
          <p>
          WooCommerce Ready theme. We provide all the tools you need to start selling online. 
          </p>
          <div className="flex justify-between mt-14">
            {ShopItem.map((item,index) =>(
              <div key={index} className='flex flex-col items-center'>
                <div className='w-14 h-14 shadow-md rounded-2xl flex items-center justify-center mb-4'>
                  <img src={item.icon} alt="" />
                </div>
                <div className='font-bold'>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
    </div>
    </div>
  )
}

export default UltimateShopping