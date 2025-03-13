import s from './Hero.module.scss';
import imgMobile1x1Webp from '../../assets/images/hero/img1mobile@1x.webp';
import imgMobile1x2Webp from '../../assets/images/hero/img1mobile@2x.webp';
import imgMobile1x1Jpg from '../../assets/images/hero/img1mobile@1x.jpg';
import imgMobile1x2Jpg from '../../assets/images/hero/img1mobile@2x.jpg';
import img1x1Webp from '../../assets/images/hero/img1@1x.webp';
import img1x2Webp from '../../assets/images/hero/img1@2x.webp';
import img1x1Jpg from '../../assets/images/hero/img1@1x.jpg';
import img1x2Jpg from '../../assets/images/hero/img1@2x.jpg';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <div className={`block ${s.heroBlock}`}>
      <div className={`container ${s.heroContainer}`}>
        <picture className={s.heroImage}>
          <source
            srcSet={`${imgMobile1x2Webp} 2x, ${imgMobile1x1Webp} 1x`}
            type="image/webp"
            media="(max-width: 992px)"
          />
          <source
            srcSet={`${imgMobile1x2Jpg} 2x, ${imgMobile1x1Jpg} 1x`}
            type="image/jpeg"
            media="(max-width: 992px)"
          />
          <source
            srcSet={`${img1x2Webp} 2x, ${img1x1Webp} 1x`}
            type="image/webp"
          />
          <source
            srcSet={`${img1x2Jpg} 2x, ${img1x1Jpg} 1x`}
            type="image/jpeg"
          />
          <img src={img1x1Jpg} alt="flowerpot" loading="lazy" />
        </picture>
        <div className={s.contentWrap}>
          <h1 className={s.heroHeader}>Organic fashion</h1>
          <div className={s.textWrap}>
            <p className={s.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Button label="Shop now" styleClass="primaryHero" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
