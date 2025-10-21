import { cardInfoFirstRow, cardInfoSecondRow } from '../assets/howYARD';
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

          <div className='absolute right-0 top-0 z-0'>
            <img
              src='how-yard/tablet-var.jpg'
              alt='icon'
              className='rounded-tr-[31px]'
            />
          </div>
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
      <div className='hidden md:block min-[1110px]:hidden absolute top-[80px] min-[800px]:top-[63px] left-[160px] min-[900px]:left-[200px] min-[930px]:hidden z-0'>
        <img
          src='how-yard/how-yard-bg-tablet.png'
          alt='how-yard-bg-tablet'
          className='h-[190px] min-[800px]:h-[220px]'
        />
      </div>
      <div className='hidden min-[1110px]:block absolute top-[80px] left-[160px] z-0'>
        <img
          src='how-yard/how-yard-bg-desktop.png'
          alt='how-yard-bg-desktop'
          className='h-[190px]'
        />
      </div>
    </div>
  );
};

export default HowYARDCardTablet;
