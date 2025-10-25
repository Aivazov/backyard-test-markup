import { linksIcons } from '../assets/howItWorks';
import HowItWorksPlayIcon from '../vectors/HowItWorksPlayIcon';
import BackgroundHowItWorks from './BackgroundHowItWorks';

const HowItWorksJoinCard = () => {
  return (
    <div className='p-5 md:p-9 bg-[#292829] rounded-[30px] min-[1110px]:h-[462px] flex flex-col items-start min-[1110px]:items-center justify-between relative'>
      <div className='w-full flex items-center justify-between min-[1110px]:flex-col min-[1110px]:items-start min-[1110px]:gap-5 mb-4 z-20 relative'>
        <h2 className='font-[Gilroy-SemiBold] text-2xl text-[#FFFFFF] p-0 m-0 min-[1110px]:text-[42px]'>
          How it works
        </h2>
        <button className='border border-[#E2E2E8] rounded-full py-[10px] px-[11px] md:hidden'>
          <HowItWorksPlayIcon />
        </button>
        <p className='font-[Gilroy-Medium] text-base text-[#787878] hidden min-[1110px]:block'>
          See how BYD and YARD work together to unlock yield and stability
        </p>
      </div>
      <div className='mb-9 z-20 relative'>
        <p className='font-[Gilroy-Medium] text-base text-[#787878] min-[1110px]:hidden'>
          See how BYD and YARD work together to unlock yield and stability
        </p>
      </div>
      <ul className='flex flex-row justify-between items-center gap-5 max-w-[132px] mb-9 z-20 relative md:hidden'>
        {linksIcons.map((item, idx) => (
          <li key={idx}>
            <a href={item.link}>{item.icon}</a>
          </li>
        ))}
      </ul>
      <div className='w-full z-20 relative flex flex-col justify-center items-center'>
        <ul className='hidden min-[1110px]:flex flex-row justify-between items-center gap-5 max-w-[132px] mb-9 z-20 relative'>
          {linksIcons.map((item, idx) => (
            <li key={idx}>
              <a href={item.link}>{item.icon}</a>
            </li>
          ))}
        </ul>
        <a
          href='#'
          className='bg-[#E6E8EC] px-[30px] py-[18px] md:px-[115px] min-[1110px]:px-[98px] rounded-[38px] flex w-full justify-center items-center'
        >
          <span className='font-[Archivo-SemiBold] text-[16px] text-[#2E2E2E]'>
            Join Whitelist
          </span>
        </a>
      </div>

      <BackgroundHowItWorks
        imgSrc='how-it-works-svg/bg-mobile.png'
        classCustom='min-[500px]:hidden'
      />
      <BackgroundHowItWorks
        imgSrc='how-it-works-svg/bg-desk-1.png'
        classCustom='hidden min-[1110px]:block min-[1370px]:hidden'
      />
    </div>
  );
};

export default HowItWorksJoinCard;
