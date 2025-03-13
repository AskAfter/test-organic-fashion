import s from './FollowUs.module.scss';

import img1x1Webp from '../../assets/images/followUs/img-1@1x.webp';
import img1x2Webp from '../../assets/images/followUs/img-1@2x.webp';
import img1x1Jpg from '../../assets/images/followUs/img-1@1x.jpg';
import img1x2Jpg from '../../assets/images/followUs/img-1@2x.jpg';

import Form from '../Form/Form';

const FollowUs = () => {
  return (
    <div className={`block ${s.followUsBlock}`}>
      <div className={s.rectangular}></div>
      <div className={`container ${s.followUsContainer}`}>
        <div className={s.followUsContent}>
          <h2 className={s.followUsHeader}>Follow us</h2>
          <Form />
        </div>
        <picture>
          <source
            srcSet={`${img1x2Webp} 2x, ${img1x1Webp} 1x`}
            type="image/webp"
          />
          <source
            srcSet={`${img1x2Jpg} 2x, ${img1x1Jpg} 1x`}
            type="image/jpg"
          />
          <img
            className={s.followUsImage}
            src={img1x1Jpg}
            alt="horsetail"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
};
export default FollowUs;
