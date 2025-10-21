// import { cardContent } from '../assets/whatIsBackyard';
import BackyardSubtitle from './BackyardSubtitle';
import BackyardText from './BackyardText';
import BackyardTitle from './BackyardTitle';

const WhatIsBackyardCardTablet = ({
  imgSrc,
  imgAlt,
  num,
  header,
  title,
  description,
}) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex flex-col justify-center items-center mb-[15px] h-[216px] gap-4 w-[60%]'>
        <BackyardTitle num={num} title={header} />

        <div className='font-[Gilroy-Medium] flex flex-col justify-start w-full bg-[#F4F6F7] rounded-[31px] p-8 gap-3'>
          <BackyardSubtitle title={title} />
          <BackyardText text={description} />
        </div>
      </div>
      <div className='w-auto'>
        <img
          src={imgSrc}
          // src='/img/yield-aggregation-tablet.png'
          alt={imgAlt}
          className='object-fill'
        />
      </div>
    </div>
  );
};

export default WhatIsBackyardCardTablet;
