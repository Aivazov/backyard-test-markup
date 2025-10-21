import { cardContent } from '../assets/whatIsBackyard';
import BackyardSubtitle from './BackyardSubtitle';
import BackyardText from './BackyardText';
import BackyardTitle from './BackyardTitle';

const WhatIsBackyardCardDesktop = () => {
  return (
    <div className='hidden min-[1110px]:flex flex-row justify-between items-center gap-10'>
      {cardContent.map(
        ({ imgSrc, imgAlt, num, header, title, description }) => (
          <div
            key={imgSrc}
            className='flex flex-col items-center justify-between gap-4'
          >
            <div className='w-full flex flex-col justify-center items-center'>
              <img
                src={imgSrc}
                alt={imgAlt}
                className='w-full h-[160px] object-none object-top'
              />

              <BackyardTitle num={num} title={header} />
            </div>
            <div className='flex flex-col justify-start  w-full bg-[#F4F6F7] rounded-[31px] p-8 min-[1110px]:p-6 gap-3'>
              <BackyardSubtitle title={title} />
              <BackyardText text={description} />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default WhatIsBackyardCardDesktop;
