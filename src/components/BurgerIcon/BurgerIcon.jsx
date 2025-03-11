import s from './BurgerIcon.module.scss';
const BurgerIcon = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.line}></div>
      <div className={s.line}></div>
      <div className={s.line}></div>
    </div>
  );
};
export default BurgerIcon;
