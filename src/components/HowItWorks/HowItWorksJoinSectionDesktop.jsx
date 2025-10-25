import BackgroundHowItWorks from './BackgroundHowItWorks';
import HowItWorksJoinCard from './HowItWorksJoinCard';

const HowItWorksJoinSectionDesktop = () => {
  return (
    <div className='hidden min-[1110px]:flex flex-row justify-between items-center gap-3'>
      <HowItWorksJoinCard />

      <div className='w-full flex justify-center items-center p-5 md:p-9 bg-[#292829] rounded-[30px] relative'>
        <img src='how-it-works-svg/how-it-pic.png' alt='bg-pic' />

        <BackgroundHowItWorks
          imgSrc='how-it-works-svg/bg-desk-1-pic.png'
          classCustom='hidden min-[1110px]:block 2xl:hidden'
          imgClassCustom='rounded-tr-[31px] rounded-tl-[31px]'
        />

        <BackgroundHowItWorks
          imgSrc='how-it-works-svg/bg-desk-2-pic.png'
          classCustom='hidden 2xl:block'
          imgClassCustom='rounded-tr-[31px] rounded-tl-[31px]'
        />
      </div>
    </div>
  );
};

export default HowItWorksJoinSectionDesktop;
