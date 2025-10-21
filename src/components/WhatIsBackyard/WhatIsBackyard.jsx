// import React from 'react';

import SectionTitle from '../SectionTitle';
import WhatIsBackyardCardDesktop from './WhatIsBackyardCardDesktop';
import WhatIsBackyardMobile from './WhatIsBackyardMobile';
import WhatIsBackyardTablet from './WhatIsBackyardTablet';

const WhatIsBackyard = () => {
  return (
    <section
      id='what-is-backyard'
      className='w-full mb-16 min-[1110px]:mb-[146px] relative z-30'
    >
      <SectionTitle title='What is Backyard?' />
      <WhatIsBackyardMobile />
      <WhatIsBackyardTablet />
      <WhatIsBackyardCardDesktop />
    </section>
  );
};

export default WhatIsBackyard;
