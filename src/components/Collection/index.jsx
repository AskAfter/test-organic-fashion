import { useSelector } from 'react-redux';

import s from './Collection.module.scss';

const Collection = () => {
  const state = useSelector(state => state.collection);

  return (
    <div className={`block ${s.collectionBlock}`}>
      <div className={s.collectionRectangular}></div>
      <div className={`container ${s.collectionContainer}`}>
        <h2 className={s.collectionHeader}>{state.title}</h2>
        <ul className={s.collectionList}>
          {state.images.map(image => (
            <li key={image.id} className={s.collectionListItem}>
              <picture>
                <source
                  media="(min-width: 1920px)"
                  srcSet={`${image.webp1920.x2} 2x, ${image.webp1920.x1} 1x`}
                  type="image/webp"
                />
                <source
                  media="(min-width: 1920px)"
                  srcSet={`${image.png1920.x2} 2x, ${image.png1920.x1} 1x`}
                  type="image/png"
                />
                <source
                  srcSet={`${image.webp.x2} 2x, ${image.webp.x1} 1x`}
                  type="image/webp"
                />
                <source
                  srcSet={`${image.png.x2} 2x, ${image.png.x1} 1x`}
                  type="image/png"
                />
                <img
                  className={s.collectionImage}
                  src={image.png.x1}
                  alt={image.alt}
                  loading="lazy"
                />
              </picture>
            </li>
          ))}
        </ul>
        <p className={s.collectionText}>{state.content}</p>
      </div>
    </div>
  );
};
export default Collection;
