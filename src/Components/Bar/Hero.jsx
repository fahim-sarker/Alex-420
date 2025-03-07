import React from 'react'
import Bar from "../../assets/images/Bar/barhero.png"
import Container from "../../Shared/Container";
import Barbottle from "../../assets/images/Bar/barbottle.png"

const Hero = () => {
  return (
    <section className='relative pt-[214px] pb-[138px]'>
        <Container className='relative z-20'>
            <div className="flex justify-between items-center">
                <div className="">
                    <h2 className='text-[96px] font-normal text-[#FFF] font-instrument tracking-[3.84px] leading-none'>Best Bars In Your Area</h2>
                    <p className='text-[24px] font-normal text-[#E9E9E9] max-w-[600px] p-1'>Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit amet.</p>
                </div>
                <div className="">
                    <img src={Barbottle} alt="Barbottle" className='translate-x-[150px]'/>
                </div>
            </div>
        </Container>
      <figure><img src={Bar} alt="Bar" className='absolute top-0 left-0 h-full w-full z-0'/></figure>
    </section>
  )
}

export default Hero
