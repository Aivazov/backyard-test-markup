import HowItWorksJoinCard from './HowItWorksJoinCard';

const HowItWorksJoinSectionDesktop = () => {
  return (
    <div className='hidden min-[1110px]:flex flex-row justify-between items-center gap-3'>
      <HowItWorksJoinCard />

      <div className='w-full flex justify-center items-center p-5 md:p-9 bg-[#292829] rounded-[30px]'>
        <img src='how-it-works-svg/how-it-pic.png' alt='bg-pic' />
      </div>
    </div>
  );
};

export default HowItWorksJoinSectionDesktop;
