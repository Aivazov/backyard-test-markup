const BackyardTitle = ({ num, title }) => {
  return (
    <button className='font-[Gilroy-SemiBold] font-bold text-[20px] text-[#303030] flex justify-start items-center w-full bg-[#F4F6F7] rounded-full p-3 gap-9 md:gap-[72px] min-[1110px]:gap-4'>
      <span className='font-[Archivo] text-base text-[#fbfbfc] px-[16px] py-[6px] bg-[#2d322f] rounded-full'>
        {num}
      </span>
      <span>{title}</span>
    </button>
  );
};

export default BackyardTitle;
