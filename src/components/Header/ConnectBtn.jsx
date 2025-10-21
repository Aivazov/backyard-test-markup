const ConnectBtn = ({ size, show, maxWidth = '150px' }) => {
  return (
    <a
      href='#'
      className={`bg-[#2D2D2D] w-full py-[10px] rounded-[38px] flex justify-center items-center ${show}`}
      style={{
        fontSize: size,
        maxWidth,
      }}
    >
      <span className='font-[Konnect-Medium] text-[#E8E9ED]'>Connect</span>
    </a>
  );
};

export default ConnectBtn;
