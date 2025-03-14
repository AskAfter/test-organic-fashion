import s from './Modal.module.scss';
import Navigation from '../Navigation/Navigation';

const Modal = ({ closeModal }) => {
  return (
    <div className={s.modalOverlay} onClick={closeModal}>
      <div className={s.modalContainer} onClick={e => e.stopPropagation()}>
        <Navigation modalClass="modalClass" closeModal={closeModal} />
        <button className={s.closeBtn} onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
};
export default Modal;
