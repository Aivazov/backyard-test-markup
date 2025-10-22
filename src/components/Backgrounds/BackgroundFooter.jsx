const BackgroundFooter = ({
  imgSrc,
  imgAlt = 'bg-footer',
  classCustom,
  styleCustom,
}) => {
  return (
    <div
      className={`w-full absolute left-0 right-0 bottom-[300px] z-20 md:hidden bg-[transparent] ${classCustom}`}
      style={{ ...styleCustom }}
    >
      <img src={imgSrc} alt={imgAlt} className='w-full' />
    </div>
  );
};

export default BackgroundFooter;
