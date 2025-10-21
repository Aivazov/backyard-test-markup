// import { cardContent } from '../assets/whatIsBackyard';
import BackyardSubtitle from './BackyardSubtitle';
import BackyardText from './BackyardText';
import BackyardTitle from './BackyardTitle';

const WhatIsBackyardCardMobile = ({
  imgSrc,
  imgAlt,
  num,
  header,
  title,
  description,
}) => {
  return (
    <div className='block md:hidden'>
      <div>
        <div className='w-full flex flex-col justify-center items-center mb-[15px] h-[216px]'>
          <img
            src={imgSrc}
            alt={imgAlt}
            className='w-full h-[160px] object-none object-top'
          />

          <BackyardTitle num={num} title={header} />
        </div>
        <div className=' flex flex-col justify-start w-full bg-[#F4F6F7] rounded-[31px] p-8 gap-3'>
          <BackyardSubtitle title={title} />

          <BackyardText text={description} />
        </div>
      </div>
    </div>
  );
};

export default WhatIsBackyardCardMobile;
