import { navItems } from '../assets/header';

const NavPanelTablet = ({ activeLink, setActiveLink }) => {
  const handleLinkClick = (title) => {
    setActiveLink(title);
  };
  return (
    <nav className='w-full  flex-row items-center justify-center p-[15px] hidden md:flex'>
      <ul
        className='font-[Konnect-Medium] text-[12px] min-[1110px]:text-[13px] text-[#7A7A7A] w-[400px] min-[1110px]:w-[455px] flex flex-row justify-between items-center
       gap-2 min-[1110px]:gap-3 bg-[#E8E9ED] rounded-[20px] border border-[#E4E4E9] py-3 px-3'
      >
        {navItems.map((item, idx) => (
          <li key={item.title}>
            <a
              href={item.link}
              onClick={() => handleLinkClick(item.title)}
              className={`${
                activeLink === item.title
                  ? 'bg-[#303030] text-[#FBFBFC] rounded-[100px] p-3'
                  : ''
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavPanelTablet;
