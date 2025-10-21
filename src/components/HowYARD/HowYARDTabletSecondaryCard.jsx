const HowYARDTabletSecondaryCard = ({
  title,
  description,
  whatBorder,
  whatWidth,
}) => {
  return (
    <div
      className='bg-[#FBFBFC] p-5 rounded-[31px] h-[151px] flex flex-col justify-between items-center relative z-20'
      style={{ border: whatBorder, borderColor: '#E1E1E1', width: whatWidth }}
    >
      {/* <div className='bg-[#FBFBFC] p-5 rounded-[31px] border border-[#E1E1E1] h-[151px] flex flex-col justify-between items-center'> */}
      <h2 className='font-[Archivo-Bold] text-[18px] leading-[1.2] text-[#7E7E7E] m-0 p-0 relative z-20'>
        {title}
      </h2>
      <div className='relative flex justify-between items-center gap-2 z-20'>
        <p className='font-[Gilroy-Medium] text-[12px] text-[#787878] m-0 p-0 '>
          {description}
        </p>
      </div>
    </div>
  );
};

export default HowYARDTabletSecondaryCard;
