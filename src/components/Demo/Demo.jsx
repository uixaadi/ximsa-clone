import sectionHead from "../../constants/sectionDemo"
import DemoProjects from "../../constants/DemoProjects"
import CursorFollower from "../CursorFollower"
import { useState } from "react"


const Demo = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className="bg-white lg:pt-80">
            <div className="flex flex-col items-center justify-center">
                <h4 className="bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 text-transparent bg-clip-text font-bold text-xl mb-0">All Demos</h4>
                <h2 className="pt-6 text-4xl lg:text-5xl text-center font-bold mb-9">18 Stunning Demos</h2>
            </div>
            <div className="m-4 lg:m-28 border rounded-[40px] p-[10px]">
                <ul className="inline-block text-center">
                    {sectionHead.map((item) => (
                        <li key={item.index} className="inline-block px-3 py-2 rounded-full font-bold">
                            <a href="#" className="gradient-button rounded-full text-base text-black font-bold">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col m-6 lg:grid items-center justify-center grid-cols-3 gap-6 p-2 lg:p-20">
                {DemoProjects.map((item) => (
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="project-container group relative cursor-pointer hover:transform hover:-translate-y-3 hover:shadow-lg" key={item.index}>
                        <div className="dot-style absolute top-0 left-4">
                            <i className="inline-block mr-[3px] rounded-full bg-[#ecedec] w-[6px] h-[6px]"></i>
                            <i className="inline-block mr-[3px] rounded-full bg-[#ecedec] w-[6px] h-[6px]"></i>
                            <i className="inline-block mr-[3px] rounded-full bg-[#ecedec] w-[6px] h-[6px]"></i>
                        </div>
                        <div className="black-wrapper flex justify-end relative project-wrapper">
                            <div className="absolute shadow-lg">
                                <img src={item.backImg} alt="" />
                            </div>
                            <div className="absolute left-0 right-0 bottom-0 ml-3 overflow-hidden text-center z-[1]">
                                <img src={item.frontImg} alt="" />
                            </div>
                        </div>
                        <div className="mt-2">
                            <h4 className="text-black group-hover:bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 group-hover:text-transparent bg-clip-text font-bold text-xl mb-0">{item.heading}</h4>
                            <h6>{item.subheding}</h6>
                        </div>
                    </div>
                ))}
            </div>
            {isHovered ? <CursorFollower cursorVariant='onenter' /> : <CursorFollower cursorVariant='default'/>}
        </div>
    )
}

export default Demo