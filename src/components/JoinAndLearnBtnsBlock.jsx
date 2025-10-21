const JoinAndLearnBtnsBlock = () => {
  return (
    <div className='flex w-full flex-row items-center justify-between md:justify-start md:gap-5'>
      <a
        href='#'
        className='bg-[#2D2D2D] px-[30px] py-[18px] md:px-[115px] rounded-[38px]'
      >
        <span className='font-[Archivo-SemiBold] text-[16px] text-[#F7F7F7]'>
          Join Whitelist
        </span>
      </a>
      <a
        href='#'
        className='bg-[#E6E8EC] px-[18px] py-[18px] md:px-[60px] rounded-[38px] flex flex-row justify-center items-center gap-[10px]'
      >
        <span className='font-[Archivo-SemiBold] text-[16px] text-[#2E2E2E] md:hidden'>
          Learn more
        </span>
        <img
          src='/hero-svg/hero-arrow-right.svg'
          alt='Icon'
          className='inline-block h-[10px] w-[11px] md:hidden'
        />
        <span className='font-[Archivo-SemiBold] text-[16px] text-[#2E2E2E] hidden md:flex'>
          Read docs
        </span>
      </a>
    </div>
  );
};

export default JoinAndLearnBtnsBlock;
