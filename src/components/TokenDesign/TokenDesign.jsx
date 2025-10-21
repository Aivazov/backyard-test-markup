import {
  mainParams,
  tokenDesignSlickContentBYD,
  tokenDesignSlickContentYARD,
} from '../assets/tokenDesign';
import SectionTitle from '../SectionTitle';
import DesignCard from './DesignCard';
import './TokenDesign.css';

const TokenDesign = () => {
  return (
    <section
      id='token-design'
      className='mb-16 md:mb-[135px] min-[1110px]:mb-[146px] min-[1370px]:mb-[130px] relative z-30'
    >
      <div className='mb-6 md:mb-36 min-[1110px]:mb-10 relative z-20'>
        <SectionTitle title={mainParams.title} />
      </div>
      {/* <div className='block w-auto md:flex flex-row'> */}
      <div className='block flex-col justify-center items-center gap-10 md:flex md:flex-row md:gap-16 md:w-full md:justify-between token-design'>
        <DesignCard
          mainTitle={mainParams.mainTitle}
          mainDescr={mainParams.mainDescr}
          cardContent={tokenDesignSlickContentBYD}
          customStyles={'mb-10 md:mb-0'}
          customStylesBottomBlock={'min-[1110px]:w-[65%]'}
        />

        <DesignCard
          mainTitle={mainParams.mainTitle2}
          mainDescr={mainParams.mainDescr2}
          cardContent={tokenDesignSlickContentYARD}
          customStylesUpperBlock={'min-[1110px]:pl-[165px] min-[1110px]:w-full'}
          customStylesBottomBlock={
            'min-[1110px]:pl-[165px] min-[1110px]:w-full'
          }
        />
      </div>

      <div className='block md:hidden absolute z-0 left-0 right-0 top-[300px] min-[476px]:top-[220px] min-[560px]:top-[160px] min-[596px]:top-[80px]'>
        <img
          src='token-design-svg/tree-mobile.png'
          alt='tree'
          className='w-full'
        />
      </div>

      <div className='md:block absolute hidden z-0 md:top-[35px] min-[950px]:hidden left-10 right-10'>
        <img
          // src='token-design-svg/tree-tablet.png'
          src='token-design-svg/tree-tablet-mask.png'
          alt='tree'
          className='w-full'
        />
      </div>
      <div className='absolute hidden top-[-10px] left-1/2 transform -translate-x-1/2 z-30  min-[1110px]:block'>
        <img
          src='token-design-svg/tree-tablet-mask.png'
          alt='tree'
          className='w-full'
        />
      </div>
    </section>
  );
};

export default TokenDesign;
