import Slider from 'react-slick';
import DesignSlickContent from './DesignSlickContent';
import { slickTokenDesign } from '../assets/slickSettings';
// import styles from './DesignCard.module.css';
// import TokenDesignRightArrowIcon from '../vectors/TokenDesignRightArrowIcon';

const DesignCard = ({
  mainTitle,
  mainDescr,
  cardContent,
  customStyles,
  customStylesUpperBlock,
  customStylesBottomBlock,
}) => {
  return (
    <div
      className={`bg-[#FBFBFC] px-5 py-[24px] rounded-[31px] md:w-[310px] h-[318px] relative z-20 min-[1110px]:w-[486px] ${customStyles}`}
    >
      <div className={`mb-6 min-[1110px]:w-[60%] ${customStylesUpperBlock}`}>
        <h2 className='font-[Archivo-Bold] text-[22px] text-[#2D322F] mb-1'>
          {mainTitle}
        </h2>
        <p className='font-[Gilroy-Medium] text-sm text-[#666666]'>
          {mainDescr}
        </p>
      </div>
      <hr className='border-[#B2B2B2] mb-6 ' />
      <div className={customStylesBottomBlock}>
        <Slider {...slickTokenDesign}>
          {cardContent?.map((item, idx) => (
            <DesignSlickContent cardTitle={item.title} cardDescr={item.text} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DesignCard;
