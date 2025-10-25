const BackgroundHowYard = ({
  imgSrc,
  imgAlt = 'how-yard-bg',
  classCustom,
  imgClassCustom,
}) => {
  return (
    <div className={`z-0 absolute ${classCustom}`}>
      <img src={imgSrc} alt={imgAlt} className={imgClassCustom} />
    </div>
  );
};

export default BackgroundHowYard;
