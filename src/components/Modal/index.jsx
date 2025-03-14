import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modalSlice';

import s from './Modal.module.scss';
import Navigation from '../Navigation';

const Modal = () => {
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return (
    <div className={s.modalOverlay} onClick={closeModal}>
      <div className={s.modalContainer} onClick={e => e.stopPropagation()}>
        <Navigation modalClass="modalClass" closeModal={closeModalHandler} />
        <button className={s.closeBtn} onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
};
export default Modal;
