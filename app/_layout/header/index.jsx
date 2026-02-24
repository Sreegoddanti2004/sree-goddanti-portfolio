'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import Image from 'next/image';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-secondary-foreground text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <Image
        src='/images/hero.jpg'
        className='object-cover md:scale-125 md:object-contain w-1/2 lg:w-2/5 mx-auto absolute inset-0'
        width={800}
        height={1200}
        sizes='(max-width: 700px) 50vw, 40vw'
        alt='Sree Goddanti Personal Picture'
      />

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(9em,15vw)]' style={{ fontFamily: 'ITC Benguiat, Playfair Display, serif', fontWeight: 'bold' }}>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Sree Goddanti
                <span className='spacer'> </span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <div className='mb-4 md:mb-20'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
              <span className='block'>Associate Director</span>
              <span className='block'>Episode Producer</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
