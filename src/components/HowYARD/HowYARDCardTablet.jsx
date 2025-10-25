import { cardInfoFirstRow, cardInfoSecondRow } from '../assets/howYARD';
import BackgroundHowYard from './BackgroundHowYard';
import HowYARDTabletSecondaryCard from './HowYARDTabletSecondaryCard';

const HowYARDCardTablet = () => {
  return (
    <div className='relative hidden md:flex w-full flex-col gap-8'>
      <div className='flex justify-between items-center flex-row gap-3'>
        <div className='bg-[#FBFBFC] p-5 rounded-[31px] border border-[#E1E1E1] relative z-20 h-[151px] '>
          <h2 className='font-[Archivo-Bold] text-[18px] text-[#454A47] mb-3 relative z-20'>
            Borrowing fuels the system
          </h2>

          <div className='relative flex justify-between items-center gap-2 z-20'>
            <p className='font-[Gilroy-Medium] text-[12px] text-[#787878]'>
              Choose multiple stablecoin strategies, diversify in seconds, and
              optimize your yield without complexity
            </p>
          </div>

          <BackgroundHowYard
            imgSrc='how-yard/tablet-var.jpg'
            imgAlt='bg-icon'
            classCustom='block right-0 top-0'
            imgClassCustom='rounded-tr-[31px]'
          />
        </div>

        {cardInfoFirstRow.map((item) => (
          <HowYARDTabletSecondaryCard
            key={item.title}
            title={item.title}
            description={item.description}
            whatBorder={item.whatBorder}
          />
        ))}
      </div>
      <div className='w-full flex justify-between items-center flex-row gap-3'>
        {cardInfoSecondRow.map((item) => (
          <HowYARDTabletSecondaryCard
            key={item.title}
            title={item.title}
            description={item.description}
            whatBorder={item.whatBorder}
            whatWidth={item.whatWidth}
          />
        ))}
      </div>

      <BackgroundHowYard
        imgSrc='how-yard/how-yard-bg-tablet.png'
        classCustom='hidden md:block min-[1110px]:hidden top-[80px] min-[800px]:top-[63px] left-[160px] min-[900px]:left-[200px] min-[930px]:hidden'
        imgClassCustom='h-[190px] min-[800px]:h-[220px]'
      />

      <BackgroundHowYard
        imgSrc='how-yard/how-yard-bg-desktop.png'
        classCustom='hidden min-[1110px]:block 2xl:hidden top-[75px] left-[165px] min-[1180px]:left-[205px]'
        imgClassCustom='h-[190px]'
      />

      <BackgroundHowYard
        imgSrc='how-yard/how-yard-bg-desktop-2.png'
        classCustom='hidden 2xl:block top-[70px] left-[325px]'
        imgClassCustom='h-[200px]'
        s
      />
    </div>
  );
};

export default HowYARDCardTablet;
