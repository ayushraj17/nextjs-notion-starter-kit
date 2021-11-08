import CTA from 'components/CTA'
import Hero from 'components/Hero'
import EverythingYouNeed from 'components/EverythingYouNeed'
import FAQ from 'components/FAQ'
import React from 'react'

const index = () => {
  return (
    <div className='custom-container'>
      <Hero />
      <EverythingYouNeed />
      {/* <ConvinceSection /> */}
      <CTA />
      <FAQ />
      {/* <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}> */}
      {/* <Testimonials /> */}
      {/* </motion.div> */}
      {/* </AnimatePresence> */}
    </div>
  )
}

export default index
