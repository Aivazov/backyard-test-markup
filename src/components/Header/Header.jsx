import { useState } from 'react';
// import logo from '../../logo-header-360.svg';
import LogoHeader from './LogoHeader';
import MenuOpenIcon from '../vectors/MenuOpenIcon';
import MenuCloseIcon from '../vectors/MenuCloseIcon';
import NavPanelMob from './NavPanelMob';
import NavPanelTablet from './NavPanelTablet';
import ConnectBtn from './ConnectBtn';
// import logo from '././logo-header-360.svg';

const Header = () => {
  const [toggleMenuBtn, setToggleMenuBtn] = useState(true);
  const [activeLink, setActiveLink] = useState(null);

  const handleToggleMenuBtn = () => {
    setToggleMenuBtn(!toggleMenuBtn);
  };
  return (
    <header className='flex items-center justify-between mb-5 md:mb-[60px] relative z-40'>
      <LogoHeader />
      <button
        className='w-10 h-10 border rounded-[10px] border-[#DEDEE3] bg-[#DEDEE3]/45 flex justify-center items-center md:hidden'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
        onClick={handleToggleMenuBtn}
      >
        {toggleMenuBtn ? <MenuOpenIcon /> : <MenuCloseIcon />}
      </button>

      {!toggleMenuBtn ? (
        <NavPanelMob
          setToggleMenuBtn={setToggleMenuBtn}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
      ) : (
        <></>
      )}
      <NavPanelTablet activeLink={activeLink} setActiveLink={setActiveLink} />
      <ConnectBtn
        size='12px'
        show='hidden md:flex min-[1110px]:hidden'
        maxWidth='75px'
      />
    </header>
  );
};

export default Header;
