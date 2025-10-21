import ConnectBtn from './ConnectBtn';
import { navItems } from '../assets/header';

const NavPanelMob = ({ setToggleMenuBtn, activeLink, setActiveLink }) => {
  const handleLinkClick = (title) => {
    setToggleMenuBtn(true);
    setActiveLink(title);
  };
  return (
    <nav className='absolute z-40 right-0 top-[50px] w-[176px] bg-[#E8E9ED] rounded-[20px] border border-[#E4E4E9] flex flex-col items-center justify-center p-[15px] md:hidden'>
      <ul className='font-[Konnect-Medium] text-[14px] text-[#7A7A7A] w-full mb-[15px] flex flex-col justify-start gap-2 relative z-40'>
        {navItems.map((item, idx) => (
          <li key={item.title}>
            <a
              href={item.link}
              onClick={() => handleLinkClick(item.title)}
              className={`${
                activeLink === item.title ? 'text-[#303030] font-bold' : ''
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <ConnectBtn size='13px' hide='flex' show='md:hidden' max_width='148px' />
    </nav>
  );
};

export default NavPanelMob;
