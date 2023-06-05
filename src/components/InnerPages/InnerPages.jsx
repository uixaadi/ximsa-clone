import { useEffect, useRef, useState } from 'react'
import Download from '../../assets/inner-icons/download.webp'
import NoCode from '../../assets/inner-icons/no-coding.webp'
import Recycle from '../../assets/inner-icons/recycle.webp'
import Setting from '../../assets/inner-icons/setting.webp'
import Dragable from './Dragable'

const InnerPages = () => {

    const innerFeatures = [
        {
            icon: Download,
            title: 'One Click Install',
        },
        {
            icon: NoCode,
            title: 'No Coding Required'
        },
        {
            icon: Setting,
            title: 'Easy to Customize',
        },
        {
            icon: Recycle,
            title: 'Regular Updates'
        },
    ]

    const innerRef = useRef();

    const [isVisible, setIsVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting)
        })
        observer.observe(innerRef.current)
    }, [])
    return (
        <div className="flex flex-col items-center justify-center lg:pt-[90px] lg:pb-[90px]">
            <div ref={innerRef} className="max-w-[1200px]">
                <div className={`${isVisible ? 'fade-in-up' : ''} flex flex-col lg:flex-row gap-5 items-center justify-between`}>
                    {innerFeatures.map((item, index) => (
                        <div key={index} className="flex w-full lg:w-[25%]">
                            <div className="flex items-center justify-center rounded-full mr-6 bg-white w-20 h-20 p-4">
                                <img src={item.icon} alt="" />
                            </div>
                            <div className="flex items-center justify-center font-bold text-lg max-w-[110px]">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center relative h-[390px] w-full top-64">
            <div className="inner-bg mt-24 flex flex-col justify-center items-center lg:max-w-[1200px] lg:w-[100%] overflow-hidden">
                <div className="flex flex-col items-center max-w-[370px]">
                    <h6 className='bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 text-transparent bg-clip-text font-bold text-xl mb-0'>Inner Pages</h6>
                    <h2 className='pt-6 text-4xl  text-white lg:text-5xl text-center font-bold mb-9'>Essential Inner & Blog Pages</h2>
                </div>
                <Dragable />
            </div>
            </div>
        </div>
    )
}

export default InnerPages