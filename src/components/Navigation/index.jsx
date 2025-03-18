import { useSelector } from 'react-redux';

import s from './Navigation.module.scss';

const Navigation = ({ modalClass, closeModal }) => {
  const state = useSelector(state => state.navigation.nav);
  return (
    <div>
      <nav className={s.nav}>
        <ul className={`${s[modalClass]} ${s.navList}`}>
          {state.map(item => (
            <li className={s.navListItem} key={item.id}>
              <a
                href={`#${item.id}`}
                className={s.navListItemLink}
                onClick={closeModal}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
