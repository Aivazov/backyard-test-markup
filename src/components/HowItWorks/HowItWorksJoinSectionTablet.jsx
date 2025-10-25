import { linksIcons } from '../assets/howItWorks';
import BackgroundHowItWorks from './BackgroundHowItWorks';

const HowItWorksJoinSectionTablet = () => {
  return (
    <div className='hidden md:flex min-[1110px]:hidden flex-col items-center justify-between gap-5 '>
      <div className='w-full flex flex-row justify-between p-5 md:p-9 bg-[#292829] rounded-[30px] relative'>
        <div className='w-[45%] flex flex-col items-start justify-between gap-5 relative z-20'>
          {/* <h2 className='font-[Gilroy-SemiBold] text-2xl text-[#FFFFFF] p-0 m-0'>
          How it works
        </h2> */}
          <h1 className='font-[Archivo-SemiBold] text-[28px]/8 text-[#FFFFFF] m-0 p-0 relative z-20  md:text-[42px]'>
            How it works
          </h1>
          <div className='relative z-20'>
            <p className='font-[Gilroy-Medium] text-base text-[#787878]'>
              See how BYD and YARD work together to unlock yield and stability
            </p>
          </div>
        </div>

        <div className=' flex flex-col items-end  gap-5 z-20 relative'>
          <div className='flex flex-row justify-between items-center gap-5 z-20 relative'>
            {linksIcons.map((item, idx) => (
              <a key={idx} href={item.link}>
                {item.icon}
              </a>
            ))}
          </div>
          <a
            href='#'
            className='bg-[#E6E8EC] py-[15px] md:px-[75px] rounded-[38px] flex w-full justify-center items-center'
          >
            <span className='font-[Archivo-SemiBold] text-[16px] text-[#2E2E2E]'>
              Join Whitelist
            </span>
          </a>
        </div>
        <BackgroundHowItWorks
          imgSrc='how-it-works-svg/bg-tablet-main.png'
          classCustom='hidden md:block min-[778px]:hidden'
          imgClassCustom='rounded-tr-[31px] rounded-tl-[31px]'
        />
      </div>

      <div className='w-full flex justify-center items-center p-5 md:p-9 bg-[#292829] rounded-[30px] relative'>
        <img src='how-it-works-svg/how-it-pic.png' alt='bg-pic' />

        <BackgroundHowItWorks
          imgSrc='how-it-works-svg/bg-tablet-pic.png'
          classCustom='hidden md:block'
          imgClassCustom='rounded-tr-[31px] rounded-tl-[31px]'
        />
      </div>
    </div>
  );
};

export default HowItWorksJoinSectionTablet;
