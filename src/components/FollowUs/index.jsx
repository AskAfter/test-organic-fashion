import { useSelector } from 'react-redux';

import s from './FollowUs.module.scss';

import Form from '../Form';

const FollowUs = () => {
  const state = useSelector(state => state.followUs);
  return (
    <div className={`block ${s.followUsBlock}`}>
      <div className={s.followUsRectangular}></div>
      <div className={`container ${s.followUsContainer}`}>
        <div className={s.followUsRectangular}></div>
        <div className={s.followUsContent}>
          <h2 className={s.followUsHeader} id="follow">
            {state.title}
          </h2>
          <Form />
        </div>
        <picture>
          <source
            srcSet={`${state.images.webp.x2} 2x, ${state.images.webp.x1} 1x`}
            type="image/webp"
          />
          <source
            srcSet={`${state.images.jpg.x2} 2x, ${state.images.jpg.x1} 1x`}
            type="image/jpg"
          />
          <img
            className={s.followUsImage}
            src={state.images.jpg.x1}
            alt="horsetail"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
};
export default FollowUs;
