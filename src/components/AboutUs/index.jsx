import { useSelector } from 'react-redux';
import s from './AboutUs.module.scss';
import Button from '../Button';

const AboutUs = () => {
  const state = useSelector(state => state.aboutUs);
  const navState = useSelector(state => state.navigation.nav);
  const navItem = navState.find(item => item.id === 'about');

  return (
    <div className={`block ${s.aboutUsBlock}`}>
      <div className={`container ${s.aboutUsContainer}`}>
        <picture>
          <source
            srcSet={`${state.images.desktop.webp.x2} 2x, ${state.images.desktop.webp.x1} 1x`}
            type="image/webp"
          />
          <source
            srcSet={`${state.images.desktop.jpg.x2} 2x, ${state.images.desktop.jpg.x1} 1x`}
            type="image/jpg"
          />
          <img
            className={s.outUsImage}
            src={state.images.desktop.jpg.x1}
            alt="horsetail"
            loading="lazy"
          />
        </picture>
        <div className={s.aboutUsContentWrap}>
          <h2 className={s.aboutUsHeader} id={navItem.id}>
            {state.title}
          </h2>
          <p className={`${s.aboutUsText} ${s.aboutUsFirstText}`}>
            {state.content}
          </p>
          <picture>
            <source
              media="(max-width: 991.5px)"
              srcSet={`${state.images.mobile.webp.x2} 2x, ${state.images.mobile.webp.x1} 1x`}
              type="image/webp"
            />
            <source
              media="(max-width: 991.5px)"
              srcSet={`${state.images.mobile.jpg.x2} 2x, ${state.images.mobile.jpg.x1} 1x`}
              type="image/jpg"
            />
            <img
              className={s.outUsMobileImage}
              src={state.images.mobile.jpg.x1}
              alt="horsetail"
              loading="lazy"
            />
          </picture>
          <p className={`${s.aboutUsText} ${s.aboutUsSecondText}`}>
            {state.contentSecondary}
          </p>
          <Button label={state.buttonText} styleClass="secondary" />
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
