import s from './AboutUs.module.scss';

import img1x1Webp from '../../assets/images/aboutUs/img-1@1x.webp';
import img1x2Webp from '../../assets/images/aboutUs/img-1@2x.webp';
import img1x1Jpg from '../../assets/images/aboutUs/img-1@1x.jpg';
import img1x2Jpg from '../../assets/images/aboutUs/img-1@2x.jpg';

import img1x1Webpx375 from '../../assets/images/aboutUs/img-1Mobile@1x.webp';
import img1x2Webpx375 from '../../assets/images/aboutUs/img-1Mobile@2x.webp';
import img1x1Jpgx375 from '../../assets/images/aboutUs/img-1Mobile@1x.jpg';
import img1x2Jpgx375 from '../../assets/images/aboutUs/img-1Mobile@2x.jpg';
import Button from '../Button/Button';

const AboutUs = () => {
  return (
    <div className={`block ${s.aboutUsBlock}`}>
      <div className={`container ${s.aboutUsContainer}`}>
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
            className={s.AboutUsImage}
            src={img1x1Jpg}
            alt="horsetail"
            loading="lazy"
          />
        </picture>
        <div className={s.aboutUsContentWrap}>
          <h2 className={s.aboutUsHeader} id="about">
            About us
          </h2>
          <p className={`${s.aboutUsText} ${s.aboutUsFirstText}`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <picture>
            <source
              media="(max-width: 991.5px)"
              srcSet={`${img1x2Webpx375} 2x, ${img1x1Webpx375} 1x`}
              type="image/webp"
            />
            <source
              media="(max-width: 991.5px)"
              srcSet={`${img1x2Jpgx375} 2x, ${img1x1Jpgx375} 1x`}
              type="image/jpg"
            />
            <img
              className={s.AboutUsMobileImage}
              src={img1x1Jpg}
              alt="horsetail"
              loading="lazy"
            />
          </picture>
          <p className={`${s.aboutUsText} ${s.aboutUsSecondText}`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Button label="Learn more" styleClass="secondary" />
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
