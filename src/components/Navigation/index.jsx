import { useSelector } from 'react-redux';

import s from './Navigation.module.scss';

const Navigation = ({ modalClass, closeModal }) => {
  const state = useSelector(state => state.navigation.nav);
  return (
    <div>
      <nav className={s.nav}>
        <ul className={`${s[modalClass]} ${s.navList}`}>
          <li className={s.navListItem}>
            <a href="#home" className={s.navListItemLink} onClick={closeModal}>
              {state.home}
            </a>
          </li>
          <li className={s.navListItem}>
            <a href="#about" className={s.navListItemLink} onClick={closeModal}>
              {state.about}
            </a>
          </li>
          <li className={s.navListItem}>
            <a href="#shop" className={s.navListItemLink} onClick={closeModal}>
              {state.shop}
            </a>
          </li>
          <li className={s.navListItem}>
            <a href="#" className={s.navListItemLink} onClick={closeModal}>
              {state.blog}
            </a>
          </li>
          <li className={s.navListItem}>
            <a
              href="#follow"
              className={s.navListItemLink}
              onClick={closeModal}
            >
              {state.contact}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
