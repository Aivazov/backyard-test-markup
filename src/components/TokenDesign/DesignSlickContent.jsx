import TokenDesignRightArrowIcon from '../vectors/TokenDesignRightArrowIcon';

const DesignSlickContent = ({ cardTitle, cardDescr }) => {
  return (
    <div className=''>
      <h2 className='font-[Archivo-Bold] text-[18px] text-[#5D625F] mb-2'>
        {cardTitle}
      </h2>
      <div className=' justify-between items-center gap-4'>
        <p className='font-[Gilroy-Medium] text-[12px] text-[#828282]'>
          {cardDescr}
        </p>
        {/* <button className='border border-[#DEDEDE] bg-[#EFEFF1] rounded-full px-3 py-[9px]'>
          <TokenDesignRightArrowIcon />
        </button> */}
      </div>
    </div>
  );
};

export default DesignSlickContent;
