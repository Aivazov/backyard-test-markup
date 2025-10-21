import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';
import FooterTablet from './FooterTablet';

const Footer = () => {
  return (
    <footer className='relative z-30'>
      <FooterMobile />
      <FooterTablet />
      <FooterDesktop />
    </footer>
  );
};

export default Footer;
