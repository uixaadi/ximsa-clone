import InnerOne from '../../assets/innerone.jpg'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

import React from 'react'

const Dragable = () => {
  return (
    <div>
        <motion.div className='carousel'>
            <motion.div drag='x' dragElastic={0.5} className='inner-carousel'>
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

