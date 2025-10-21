import JoinAndLearnBtnsBlock from '../JoinAndLearnBtnsBlock';
import BiggestTitle from '../BiggestTitle';
import SectionDescription from '../SectionDescription';

const RealYield = () => {
  return (
    <section className='mb-[106px] md:mb-[90px] relative z-30'>
      <div className='mb-[60px]'>
        <BiggestTitle title='Real yield starts early' />

        <SectionDescription text='Join the whitelist. Skip the points meta. Earn YARD' />
      </div>

      <JoinAndLearnBtnsBlock />
    </section>
  );
};

export default RealYield;
