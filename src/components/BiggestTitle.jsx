const BiggestTitle = ({ title, display = 'block' }) => {
  return (
    <h1
      className={`font-[Archivo-SemiBold] text-[58px] md:text-[48px] min-[1110px]:text-[72px] min-[1370px]:text-[90px] text-[#303030] leading-[0.98] md:leading-[1.1] mb-4 ${display}`}
    >
      {title}
    </h1>
  );
};

export default BiggestTitle;
