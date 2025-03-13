import s from './Navigation.module.scss';
const Navigation = () => {
  return (
    <div>
      <nav className={s.nav}>
        <ul className={s.navList}>
          <li className={s.navListItem}>
            <a href="#home" className={s.navListItemLink}>
              Home
            </a>
          </li>
          <li className={s.navListItem}>
            <a href="#about" className={s.navListItemLink}>
              About
            </a>
          </li>
          <li className={s.navListItem}>
            <a href="#shop" className={s.navListItemLink}>
              Shop
            </a>
          </li>
          <li className={s.navListItem}>
            <a href="#" className={s.navListItemLink}>
              Blog
            </a>
          </li>
          <li className={s.navListItem}>
            <a href="#" className={s.navListItemLink}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
