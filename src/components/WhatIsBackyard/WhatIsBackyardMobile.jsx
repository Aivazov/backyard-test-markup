import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './WhatIsBackyard.css';

import WhatIsBackyardCardMobile from './WhatIsBackyardCardMobile';
import { cardContent } from '../assets/whatIsBackyard';
import { slickWhatIsBackyard } from '../assets/slickSettings';

const WhatIsBackyardMobile = () => {
  return (
    <div className='block md:hidden what-is'>
      <Slider {...slickWhatIsBackyard}>
        {cardContent.map((item, idx) => (
          <WhatIsBackyardCardMobile
            key={item.imgSrc}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            num={item.num}
            header={item.header}
            title={item.title}
            description={item.description}
          />
        ))}
      </Slider>
    </div>
  );
};

export default WhatIsBackyardMobile;
