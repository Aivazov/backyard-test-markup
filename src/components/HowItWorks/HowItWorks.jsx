import HowItWorksJoinSectionTablet from './HowItWorksJoinSectionTablet';
import HowItWorksJoinSectionDesktop from './HowItWorksJoinSectionDesktop';
import HowItWorksJoinSectionMobile from './HowItWorksJoinSectionMobile';

const HowItWorks = () => {
  return (
    <section
      id='how-it-works'
      className='w-full mb-16 md:mb-[120px] min-[1110px]:mb-[146px] min-[1370px]:mb-[130px] relative z-30'
    >
      <HowItWorksJoinSectionMobile />
      <HowItWorksJoinSectionTablet />
      <HowItWorksJoinSectionDesktop />
    </section>
  );
};

export default HowItWorks;
