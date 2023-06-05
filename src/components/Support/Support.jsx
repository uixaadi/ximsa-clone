import Headphone from '../../assets/support-image/Headphone.webp'
import Document from '../../assets/support-image/Document.webp'
import Setting from '../../assets/support-image/Setting.webp'

const Support = () => {
    const SupportItem = [
        {
            icon: Headphone,
            title: 'How Can We Help You?',
            subtitle: 'Open a ticket for support'
        },
        {
            icon: Document,
            title: 'How Can We Help You?',
            subtitle: 'Open a ticket for support'
        },
        {
            icon: Setting,
            title: 'How Can We Help You?',
            subtitle: 'Open a ticket for support'
        },
    ]

  return (
    <div className="support">
        <div className="w-full max-w-[1200px] mr-auto ml-auto">
            <div className="flex flex-col lg:flex-row justify-between fade-in-up">
                {SupportItem.map((item, index) => (
                    <div key={index} className="flex flex-col items-center pl-3 pr-3 mt-10">
                        <div className='mb-[25px]'>
                            <img src={item.icon} alt="" />
                        </div>
                        <div className='text-center text-white'>
                            <div className='text-2xl font-bold pb-[10px]'>{item.title}</div>
                            <a className='link-gradient font-bold text-[#848484]' href='#'>{item.subtitle}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Support