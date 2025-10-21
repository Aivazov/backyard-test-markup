import {
  footerLinksIcons,
  footerNavList,
  footerPrivacy,
} from '../assets/footer';

const FooterTablet = () => {
  return (
    <div className='w-full hidden md:block xl:hidden'>
      <div className='flex flex-row justify-between items-center mb-2 font-[Gilroy-SemiBold] text-[12px] leading-[24px] text-[#7C7C7C] gap-2'>
        <div className='flex flex-row justify-between items-center gap-10'>
          <p className='text-[11px] text-[#313131]'>© 2025 Backyard</p>

          <ul className='flex flex-row items-center justify-center text-[#7C7C7C] gap-2'>
            {footerPrivacy.map((item) => (
              <li key={item.title}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <ul className='flex flex-row items-center justify-center text-[#A9A9A9] gap-7'>
          {footerNavList.map((item) => (
            <li key={item.title}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-full flex flex-row justify-end items-center font-[Gilroy-SemiBold] text-[9px] leading-[16px] text-[#A9A9A9] relative z-10'>
        <div className='flex flex-row justify-between items-center gap-4'>
          {footerLinksIcons.map((item, idx) => (
            <a key={idx} href={item.link}>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterTablet;
