import { Button } from '../components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row lg:flex-row justify-around align items-center bg-third'>
        <div className='mt-8 mb-8'>
            <h1 className='text-[24px] text-center bg-black text-first font-bold p-3'>Desi Zaiqa, Nawabi Andaaz.</h1>
            <p className='text-[16px] md:text-[18px] lg:text-[18px] text-center bg-second text-black font-semibold p-3'>Traditional Recipes, Modern Wellness.<br/> Desi Swad, Maa Ke Haathon Jaisi Sehat.</p>
            <div>
            <Button variant="default" className='text-xl text-center mt-4 ml-24 sm:ml-28 md:ml-52 lg:ml-52 p-4 bg-pink-700'><Link href="Food_Menu">Food Menu</Link></Button>
            
            </div>
        </div>
        <div className='mt- bg-first'>
            <Image src="/Image/hero-pic.webp" alt="hero image" width={550} height={550} /> 
        </div>
      
    </section>
  )
}

export default Hero;