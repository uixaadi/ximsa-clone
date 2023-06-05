import VideoPng from '../../assets/video.png'
import { PlayCircle } from 'iconsax-react'

const Video = () => {
    return (
        <div>
            <div className="flex flex-col h-[620px]">
                <div className="flex flex-col items-center justify-center mt-28">
                    <h4 className="bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 text-transparent bg-clip-text font-bold text-xl mb-0">Short Video Tutorial</h4>
                    <h2 className="pt-6 text-4xl lg:text-5xl text-center font-bold mb-9">Video will help to learn much better!</h2>
                    <div className='thx-header-btn'>
                        <a
                            href='#'
                            className='flex items-center justify-center rounded-full  w-[220px] h-[50px] lg:w-[260px] lg:h-16 text-base text-white font-bold'>
                            One Click Demo Install
                            <span></span>
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-8 relative">
                    <div className="video-container flex items-center relative justify-center w-[90%]">
                        <img className='video-image block ' src={VideoPng} alt="" />
                        <div className="video-overlay m-6 mb-0">
                        </div>
                        <div className="play-btn absolute right-[50%]">
                            <div className="play-border m-0">
                                <PlayCircle size="64" color="#FF8A65" variant="Bold" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video