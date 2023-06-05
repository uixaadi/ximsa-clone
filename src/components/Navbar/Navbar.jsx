import { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png'
import { CloseSquare, HambergerMenu } from 'iconsax-react';


const navigation = [
    { name: "Demos", href: "#" },
    { name: "Element", href: "#" },
    { name: "Features", href: "#" },
    { name: "Support", href: "#" },
    { name: "Documentations", href: "#" },
];

const Navbar = () => {
    const [MobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if (scrollTop > 0 && !isScrolled) {
                setIsScrolled(true)
            } else if (scrollTop === 0 && isScrolled) {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isScrolled])

    return (
        <nav className={`${isScrolled ? 'navbar-section pt-4 pb-4 pl-7 pr-7 lg:pt-4 lg:pb-4' : 'pt-5 pb-5 pl-5 pr-5 lg:pt-[35px] lg:pb-[35px]'}  lg:pl-[60px] lg:pr-[60px] flex items-center justify-between`}>
            <div className="logo">
                <a href="#">
                    <img className='max-w-[70%] lg:max-w-full h-auto' src={Logo} alt="ximsa-logo" />
                </a>
            </div>
            <div className='flex'>
                <ul className='hidden lg:flex lg:gap-x-12'>
                    {navigation.map((item, index) => (
                        <a key={index} href={item.href} className="text-base font-bold leading-6 text-gray-900">
                            <li>{item.name}</li>
                        </a>
                    ))}
                </ul>
            </div>
            <div className='thx-header-btn'>
                <a
                    href='#'
                    className='flex items-center justify-center rounded-full  w-[150px] h-[45px] lg:w-[200px] lg:h-12 text-base text-white font-bold'>
                    Purchase Now
                    <span></span>
                </a>
            </div>
            <div className="mobile-menu flex items-center lg:hidden">
                <button onClick={() => setMobileMenuOpen(true)}>
                    <HambergerMenu size="32" color="#FF8A65"/>
                </button>
            </div>
            {MobileMenuOpen && (
                <div className='lg:hidden z-[60] transition ease-in-out duration-300 fixed flex'>
                    <div className='transition ease-in-out duration-300 fixed flex flex-col items-center inset-y-0 left-0 top-0 bg-white h-[100vh] w-[60%] px-6 py-6 ring-1 ring-gray-900/10'>
                        <div className='w-full flex justify-end'>
                            <button onClick={() => setMobileMenuOpen(false)}>
                                <CloseSquare size="32" color='#FF8A54'/>
                            </button>
                        </div>
                        <img src={Logo} className='mb-8' alt="" />
                        <ul className='flex flex-col w-full'>
                            {navigation.map((item, index) => (
                                <a key={index} href={item.href} className="text-base font-bold leading-6 text-gray-900 mb-5 border-b-[1px]">
                                    <li>{item.name}</li>
                                </a>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar