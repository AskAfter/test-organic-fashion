import { useSelector } from 'react-redux';

import s from './Collection.module.scss';

const Collection = () => {
  const state = useSelector(state => state.collection);
  return (
    <div className={`block ${s.collectionBlock}`}>
      <div className={s.rectangular}></div>
      <div className={`container ${s.collectionContainer}`}>
        <h2 className={s.collectionHeader}>{state.title}</h2>
        <ul className={s.collectionList}>
          <li className={s.collectionListItem}>
            <picture>
              <source
                media="(min-width: 1920px)"
                srcSet={`${state.images.img1.webp1920.x2} 2x, ${state.images.img1.webp1920.x1} 1x`}
                type="image/webp"
              />
              <source
                media="(min-width: 1920px)"
                srcSet={`${state.images.img1.png1920.x2} 2x, ${state.images.img1.png1920.x1} 1x`}
                type="image/png"
              />
              <source
                srcSet={`${state.images.img1.webp.x2} 2x, ${state.images.img1.webp.x1} 1x`}
                type="image/webp"
              />
              <source
                srcSet={`${state.images.img1.png.x2} 2x, ${state.images.img1.png.x1} 1x`}
                type="image/png"
              />
              <img
                className={s.collectionImage}
                src={state.images.img1.png.x1}
                alt="bush"
                loading="lazy"
              />
            </picture>
          </li>
          <li className={s.collectionListItem}>
            <picture>
              <source
                media="(min-width: 1920px)"
                srcSet={`${state.images.img2.webp1920.x2} 2x, ${state.images.img2.webp1920.x1} 1x`}
                type="image/webp"
              />
              <source
                media="(min-width: 1920px)"
                srcSet={`${state.images.img2.png1920.x2} 2x, ${state.images.img2.png1920.x1} 1x`}
                type="image/png"
              />
              <source
                srcSet={`${state.images.img2.webp.x2} 2x, ${state.images.img2.webp.x1} 1x`}
                type="image/webp"
              />
              <source
                srcSet={`${state.images.img2.png.x2} 2x, ${state.images.img2.png.x1} 1x`}
                type="image/png"
              />
              <img
                className={s.collectionImage}
                src={state.images.img2.png.x1}
                alt="flowerpot"
                loading="lazy"
              />
            </picture>
          </li>
          <li className={s.collectionListItem}>
            <picture>
              <source
                media="(min-width: 1920px)"
                srcSet={`${state.images.img3.webp1920.x2} 2x, ${state.images.img3.webp1920.x1} 1x`}
                type="image/webp"
              />
              <source
                media="(min-width: 1920px)"
                srcSet={`${state.images.img3.png1920.x2} 2x, ${state.images.img3.png1920.x1} 1x`}
                type="image/png"
              />
              <source
                srcSet={`${state.images.img3.webp.x2} 2x, ${state.images.img3.webp.x1} 1x`}
                type="image/webp"
              />
              <source
                srcSet={`${state.images.img3.png.x2} 2x, ${state.images.img3.png.x1} 1x`}
                type="image/png"
              />
              <img
                className={s.collectionImage}
                src={state.images.img3.webp.x1}
                alt="leaf"
                loading="lazy"
              />
            </picture>
          </li>
        </ul>
        <p className={s.text}>{state.content}</p>
      </div>
    </div>
  );
};
export default Collection;
