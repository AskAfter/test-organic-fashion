import s from './Form.module.scss';

import Button from '../Button';

const Form = () => {
  return (
    <form className={s.contactForm}>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        className={s.inputEmailName}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter a valid email address"
        className={s.inputEmailName}
      />
      <textarea
        name="message"
        placeholder="Enter your message"
        className={s.inputMessage}
      ></textarea>
      <Button label="Submit" styleClass="primary" />
    </form>
  );
};

export default Form;
