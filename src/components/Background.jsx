const Background = ({ imgSrc, imgAlt, classSettings }) => {
  return (
    <div
      className={`w-full absolute left-0 right-0 top-0 z-20 color-dodge min-[490px]:hidden ${classSettings}`}
    >
      <img
        // src='footer/bg-footer-mobile.png'
        // src='footer/bg-big-footer-mobile.png'
        src={imgSrc}
        alt={imgAlt}
        className='w-full'
        // style={{ filter: 'invert(100%)' }}
      />
    </div>
  );
};

export default Background;
