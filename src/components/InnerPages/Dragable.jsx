import InnerOne from '../../assets/innerone.jpg'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const Dragable = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        console.log(carousel.current.scrollWidth)
    },[])

  return (
    <div>
        <motion.div ref={carousel} className='carousel'>
            <motion.div drag='x' dragConstraints={{right: 0}} dragElastic={0.5} className='inner-carousel'>
                <motion.div className='item'>
                    <img src={InnerOne} alt="" />
                </motion.div>
                <motion.div className='item'>
                    <img src={InnerOne} alt="" />
                </motion.div>
                <motion.div className='item'>
                    <img src={InnerOne} alt="" />
                </motion.div>
                <motion.div className='item'>
                    <img src={InnerOne} alt="" />
                </motion.div>
                <motion.div className='item'>
                    <img src={InnerOne} alt="" />
                </motion.div>
                <motion.div className='item'>
                    <img src={InnerOne} alt="" />
                </motion.div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Dragable

