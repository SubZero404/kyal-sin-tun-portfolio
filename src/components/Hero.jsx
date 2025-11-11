import { useState, useEffect } from 'react';
import LightRays from './LightRays/LightRays';


export default function Hero() {

  const [raysOrigin, setRaysOrigin] = useState('left');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setRaysOrigin('top'); // for mobile/tablet (below lg)
      } else {
        setRaysOrigin('left'); // for desktop
      }
    };

    handleResize(); // check once when mounted
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id='hero' className="relative w-screen min-h-screen" style={{ background: '#202020' }}>
      <div className="absolute left-0 top-0">
        <div className='w-screen h-screen relative'>
          <LightRays
            raysOrigin={raysOrigin}
            raysColor="#ffffff"
            raysSpeed={0.5}
            lightSpread={.8}
            rayLength={4}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
      </div>

      <div className=" absolute bottom-0 left-0 w-full h-11/12 flex flex-col lg:flex-row overflow-hidden">
        <div className="flex-1 lg:h-full flex items-center">
          <p className='font-lexend text-white text-5xl lg:text-6xl text-center lg:text-start px-5 lg:ps-30'>
            Hello! I'm a 
            <span className='text-red-700'> web developer </span> 
            with strong UI skills in frontend and best coding skills in backend
            </p>
        </div>
        <div className="flex-1 h-full flex justify-center">
          <img src="/img/hero.png" alt="hero-img" className='w-auto h-full object-cover'/>
        </div>
      </div>
    </section>
  );
}
