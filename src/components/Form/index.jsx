import s from './Form.module.scss';

import Button from '../Button';

const Form = () => {
  return (
    <form className={s.form}>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        className={s.formInputEmailName}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter a valid email address"
        className={s.formInputEmailName}
      />
      <textarea
        name="message"
        placeholder="Enter your message"
        className={s.formInputMessage}
      ></textarea>
      <Button label="Submit" styleClass="btnPrimary" />
    </form>
  );
};

export default Form;
