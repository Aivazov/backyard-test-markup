import BiggestTitle from '../BiggestTitle';
import JoinAndLearnBtnsBlock from '../JoinAndLearnBtnsBlock';
import SectionDescription from '../SectionDescription';

const Hero = () => {
  return (
    <section className='w-full mb-[65px] md:mb-[118px] min-[1110px]:mb-[170px] min-[1370px]:mb-[130px] relative z-30'>
      <div className='mb-10'>
        <div className='flex flex-row w-full items-center justify-start gap-[18px] mb-3'>
          <h1 className='font-[Archivo-SemiBold] text-[58px] text-[#303030] leading-[1.1] md:hidden'>
            The yield-backed stablecoin protocol boosting DeFi
            <span className='inline-block align-middle md:hidden'>
              <img
                src='/hero-svg/hero-img.svg'
                alt='Icon'
                className='inline-block h-[60px] mx-4 mb-2 '
              />
            </span>
            liquidity
          </h1>

          <BiggestTitle
            title='The yield-backed stablecoin protocol boosting DeFi liquidity'
            display='hidden md:block'
          />
          <div className='hidden align-middle md:flex md:mr-4'>
            <img
              src='/hero-svg/hero-img.svg'
              alt='Icon'
              className='inline-block w-[360px]'
            />
          </div>
        </div>

        <SectionDescription text='Keep your yield working for you — we keep your liquidity accessible' />
      </div>

      <JoinAndLearnBtnsBlock />
    </section>
  );
};

export default Hero;
