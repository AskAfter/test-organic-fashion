import s from './Button.module.scss';
const Button = ({ label, styleClass }) => {
  return <button className={`${s.btn} ${s[styleClass]}`}>{label}</button>;
};
export default Button;
