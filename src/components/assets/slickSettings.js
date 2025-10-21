export const slickWhatIsBackyard = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  customPaging: (i) => (
    <div
      style={{
        width: '28px',
        height: '4px',
        backgroundColor: '#979797',
        borderRadius: '148px',
        opacity: 0.19,
        transition: 'background-color 0.3s ease, opacity 0.3s ease',
      }}
    />
  ),
};

export const slickTokenDesign = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  customPaging: (i) => (
    <div
      style={{
        width: '20px',
        height: '3px',
        backgroundColor: '#979797',
        borderRadius: '80px',
        opacity: 0.19,
        transition: 'background-color 0.3s ease, opacity 0.3s ease',
      }}
    />
  ),
};
