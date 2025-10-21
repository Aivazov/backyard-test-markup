import Background from './components/Background';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import HowYARD from './components/HowYARD/HowYARD';
import RealYield from './components/RealYield/RealYield';
import TokenDesign from './components/TokenDesign/TokenDesign';
import WhatIsBackyard from './components/WhatIsBackyard/WhatIsBackyard';
// import logo from './logo-header-360.svg';
// import './App.css';

function App() {
  return (
    <div className='bg-[#EFEFF2] relative p-[22px] md:px-8 xl:px-20 flex justify-center items-center'>
      <div className='w-full max-w-[1370px]'>
        <Header />
        <Hero />
        <WhatIsBackyard />
        <HowItWorks />
        <TokenDesign />
        <HowYARD />
        <RealYield />
        <Footer />
      </div>
      {/* <div className='w-full absolute left-0 right-0 top-0 z-[1] md:hidden color-dodge'>
        <img
          src='footer/bg-mobile-whole.png'
          alt='bg-footer'
          className='w-full'
          // style={{ filter: 'invert(100%)' }}
        />
      </div> */}
      {/* <div className='w-full absolute left-0 right-0 bottom-[200px] z-20 md:hidden rotate-180 color-dodge'>
        <img
          src='footer/bg-footer-upper-mobile.png'
          alt='bg-footer'
          className='w-full'
          // style={{ filter: 'invert(100%)' }}
        />
      </div> */}
      <div className='w-full absolute left-0 right-0 top-0 z-20 md:hidden color-dodge min-[490px]:hidden'>
        <img
          // src='footer/bg-footer-mobile.png'
          // src='footer/bg-big-footer-mobile.png'
          src='bg/hero-bg-1.png'
          alt='bg-hero-mobile'
          className='w-full'
          // style={{ filter: 'invert(100%)' }}
        />
      </div>
      <Background
        imgSrc='bg/hero-bg-1.png'
        imgAlt='bg-hero-mobile'
        classSettings='md:hidden'
      />
      <Background
        imgSrc='bg/hero-bg-tablet.png'
        imgAlt='bg-hero-tablet'
        classSettings='md:block'
      />
      <div className='w-full absolute left-0 right-0 bottom-0 z-20 md:hidden color-dodge'>
        <img
          // src='footer/bg-footer-mobile.png'
          // src='footer/bg-big-footer-mobile.png'
          src='footer/bg-whole-footer-mobile.png'
          alt='bg-footer'
          className='w-full'
          // style={{ filter: 'invert(100%)' }}
        />
      </div>
    </div>
  );
}

export default App;
