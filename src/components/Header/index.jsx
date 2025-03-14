import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/modalSlice';
import BurgerIcon from '../BurgerIcon';
import Navigation from '../Navigation';
import s from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();

  const openModalHandler = () => {
    dispatch(openModal());
  };

  const state = useSelector(state => state.header);
  return (
    <div className={`block ${s.headerBlock}`}>
      <div className={`container ${s.headerContainer}`}>
        <nav className={s.nav}>
          <a href="/" rel="no-referrer noopener" className={s.navName}>
            {state.title}
          </a>
          <button
            type="button"
            className={s.navMobileMenu}
            onClick={openModalHandler}
          >
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
