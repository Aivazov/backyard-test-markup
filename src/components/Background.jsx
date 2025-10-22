const Background = ({ imgSrc, imgAlt, classSettings }) => {
  return (
    <div
      className={`w-full absolute left-0 right-0 top-0 z-20 min-[490px]:hidden color-dodge ${classSettings}`}
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        className='w-full'
        // style={{ filter: 'invert(100%)' }}
      />
    </div>
  );
};

export default Background;
