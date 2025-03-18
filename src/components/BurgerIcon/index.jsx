import s from './BurgerIcon.module.scss';
const BurgerIcon = () => {
  return (
    <div className={s.burgerIconWrapper}>
      <div className={s.burgerIconWrapperLine}></div>
      <div className={s.burgerIconWrapperLine}></div>
      <div className={s.burgerIconWrapperLine}></div>
    </div>
  );
};
export default BurgerIcon;
