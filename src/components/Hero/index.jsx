import { useSelector } from 'react-redux';

import s from './Hero.module.scss';

import Button from '../Button';

const Hero = () => {
  const hero = useSelector(state => state.hero);
  const navState = useSelector(state => state.navigation.nav);
  const navItem = navState.find(item => item.id === 'home');

  return (
    <div className={`block ${s.heroBlock}`}>
      <div className={`container ${s.heroContainer}`}>
        <picture className={s.heroImage}>
          <source
            srcSet={`${hero.images.mobile.webp.x2} 2x, ${hero.images.mobile.webp.x1} 1x`}
            type="image/webp"
            media="(max-width: 992px)"
          />
          <source
            srcSet={`${hero.images.mobile.jpg.x2} 2x, ${hero.images.mobile.jpg.x1} 1x`}
            type="image/jpeg"
            media="(max-width: 992px)"
          />
          <source
            srcSet={`${hero.images.desktop.webp.x2} 2x, ${hero.images.desktop.webp.x1} 1x`}
            type="image/webp"
          />
          <source
            srcSet={`${hero.images.desktop.jpg.x2} 2x, ${hero.images.desktop.jpg.x1} 1x`}
            type="image/jpeg"
          />
          <img
            src={hero.images.desktop.jpg.x1}
            alt="flowerpot"
            loading="lazy"
          />
        </picture>
        <div className={s.contentWrap}>
          <h1 className={s.heroHeader} id={navItem.id}>
            {hero.title}
          </h1>
          <div className={s.textWrap}>
            <p className={s.text}>{hero.content}</p>
            <Button label={hero.buttonText} styleClass="primaryHero" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
