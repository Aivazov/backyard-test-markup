import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './WhatIsBackyard.css';

import WhatIsBackyardCardTablet from './WhatIsBackyardCardTablet';
import { cardContent } from '../assets/whatIsBackyard';
import { slickWhatIsBackyard } from '../assets/slickSettings';

const WhatIsBackyardTablet = () => {
  return (
    <div className='hidden md:block min-[1110px]:hidden mt-11 justify-between items-center what-is'>
      <Slider {...slickWhatIsBackyard}>
        {cardContent.map((item, idx) => (
          <WhatIsBackyardCardTablet
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

export default WhatIsBackyardTablet;
