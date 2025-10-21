import {
  footerLinksIcons,
  footerNavList,
  footerPrivacy,
} from '../assets/footer';

const FooterMobile = () => {
  return (
    <div className='w-full block md:hidden'>
      <div className='flex flex-row justify-between items-center mb-[10px]'>
        <p className='font-[Gilroy-SemiBold] text-[11px] leading-[24px] text-[#313131]'>
          © 2025 Backyard
        </p>

        <div className='flex flex-row justify-between items-center gap-3'>
          {footerLinksIcons.map((item, idx) => (
            <a key={idx} href={item.link}>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div className='w-full flex flex-row justify-between items-start font-[Gilroy-SemiBold] text-[9px] leading-[16px] text-[#A9A9A9] relative z-10'>
        <ul>
          {footerNavList.map((item) => (
            <li key={item.title}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>

        <ul className='flex flex-col items-end'>
          {footerPrivacy.map((item) => (
            <li key={item.title}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterMobile;
