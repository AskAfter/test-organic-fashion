import BurgerIcon from '../BurgerIcon/BurgerIcon';
// import Navigation from '../Navigation/Navigation';
import s from './Header.module.scss';

const Header = () => {
  return (
    <div className={`block ${s.headerBlock}`}>
      <div className={`container ${s.headerContainer}`}>
        <nav className={s.nav}>
          <a href="/" rel="no-referrer noopener" className={s.navName}>
            ALTANSCHOOL WEB COURSES
          </a>
          <button type="button" className={s.navMobileMenu}>
            <BurgerIcon />
          </button>
          {/* <Navigation /> */}
        </nav>
      </div>
    </div>
  );
};
export default Header;
