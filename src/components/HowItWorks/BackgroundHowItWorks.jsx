import React from 'react';

const BackgroundHowItWorks = ({
  imgSrc,
  imgAlt = 'bg',
  classCustom,
  imgClassCustom,
}) => {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 rounded-[31px] ${classCustom}`}
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        className={`rounded-br-[31px] rounded-bl-[31px] block w-full plus-ligher ${imgClassCustom}`}
      />
    </div>
  );
};

export default BackgroundHowItWorks;
