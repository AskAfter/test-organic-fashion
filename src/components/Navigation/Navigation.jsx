import s from './Navigation.module.scss';
const Navigation = ({ modalClass, closeModal }) => {
  return (
    <div>
      <nav className={s.nav}>
        <ul className={`${s[modalClass]} ${s.navList}`}>
          <li className={s.navListItem}>
            <a href="#home" className={s.navListItemLink} onClick={closeModal}>
              Home
            </a>
          </li>
          <li className={s.navListItem}>
            <a href="#about" className={s.navListItemLink} onClick={closeModal}>
              About
            </a>
          </li>
          <li className={s.navListItem}>
            <a href="#shop" className={s.navListItemLink} onClick={closeModal}>
              Shop
            </a>
          </li>
          <li className={s.navListItem}>
            <a href="#" className={s.navListItemLink} onClick={closeModal}>
              Blog
            </a>
          </li>
          <li className={s.navListItem}>
            <a href="#" className={s.navListItemLink} onClick={closeModal}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
