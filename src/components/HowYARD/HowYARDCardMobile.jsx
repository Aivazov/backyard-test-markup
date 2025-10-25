import './HowYARDCardMobile.css';
import Slider from 'react-slick';
// import TokenDesignRightArrowIcon from '../vectors/TokenDesignRightArrowIcon';
import { slickTokenDesign } from '../assets/slickSettings';
import { cardInfo } from '../assets/howYARD';
import BackgroundHowYard from './BackgroundHowYard';

const HowYARDCardMobile = () => {
  return (
    <div className='block md:hidden h-[180px] w-full bg-[#FBFBFC] p-5 rounded-[31px] border border-[#E1E1E1] relative'>
      <div className='relative z-30 how-yard'>
        <Slider {...slickTokenDesign}>
          {cardInfo?.map((item, idx) => (
            <div className='relative z-30'>
              <h2 className='font-[Archivo-Bold] text-[18px] text-[#454A47] mb-3 relative z-30'>
                {item.title}
              </h2>

              <div className='relative flex justify-between items-center gap-2 z-30'>
                <p className='font-[Gilroy-Medium] text-[12px] text-[#787878]'>
                  {item.description}
                </p>
                {/* <button className='border border-[#DEDEDE] bg-[#EFEFF1] rounded-full px-3 py-[9px]'>
                <TokenDesignRightArrowIcon />
              </button> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <BackgroundHowYard
        imgSrc='how-yard/mobile-var.png'
        imgAlt='bg-icon'
        classCustom='right-0 top-0'
        imgClassCustom='rounded-tr-[31px]'
      />
    </div>
  );
};

export default HowYARDCardMobile;
