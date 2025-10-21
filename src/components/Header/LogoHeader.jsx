const LogoHeader = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-[7px]'>
      <img
        src='hero-svg/hero-img.svg'
        className='w-[26px] h-[26px]'
        alt='logo'
      />
      <p className='font-[Gilroy-SemiBold]  py-[11.5px] text-[17px] text-[#333]/[95] logoWithShadow'>
        Backyard
      </p>
      {/* <p className='hidden font-[Gilroy-SemiBold]  py-[11.5px] text-[17px] text-[#333]/[95] md:block'>
        Backyard
      </p> */}
    </div>
  );
};

export default LogoHeader;
