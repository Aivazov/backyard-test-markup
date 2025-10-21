import SectionTitle from '../SectionTitle';
import HowYARDCardMobile from './HowYARDCardMobile';
import HowYARDCardTablet from './HowYARDCardTablet';
import SectionDescription from '../SectionDescription';

const params = {
  title: 'How YARD Drives Everything',
};

const HowYARD = () => {
  return (
    <section id='yard-flywheel' className='mb-[76px] relative z-30'>
      <div className='w-full mb-5'>
        <SectionTitle title={params.title} />
        <SectionDescription
          text='A self-reinforcing incentive loop that drives liquidity, boosts yield,
          and amplifies governance power'
        />
      </div>

      <HowYARDCardMobile />
      <HowYARDCardTablet />
    </section>
  );
};

export default HowYARD;
