import React from 'react'
import { motion } from 'framer-motion'
const South = () => {
  return (
    <div className='bg-primary'>
        <div className=' xl:p-main lg:p-main p-sm'>
            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.3,
                  type: "spring",
                  ease: "linear",
                  delay:0.5
                },
              }}
            className=' xl:py-[14rem] lg:py-[14rem] py-[4rem] text-yellow text-center font-title xl:text-title lg:text-title xl:leading-title lg:leading-title text-4xl capitalize'> south bay <br/> forewever <span className=' text-2xl xl:ml-[-40px] lg:ml-[-40px] font-main'>(02) </span> </motion.h1>
        </div>
    </div>
  )
}

export default South