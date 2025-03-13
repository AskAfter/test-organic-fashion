import BurgerIcon from '../BurgerIcon/BurgerIcon';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.scss';

const Header = ({ openModal }) => {
  return (
    <div className={`block ${s.headerBlock}`}>
      <div className={`container ${s.headerContainer}`}>
        <nav className={s.nav}>
          <a href="/" rel="no-referrer noopener" className={s.navName}>
            Altanschool web courses
          </a>
          <button type="button" className={s.navMobileMenu} onClick={openModal}>
            <BurgerIcon />
          </button>
          <div className={s.navNavigation}>
            <Navigation />
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;
