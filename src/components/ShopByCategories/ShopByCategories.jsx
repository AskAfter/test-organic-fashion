import s from './ShopByCategories.module.scss';

import { useSelector } from 'react-redux';

const ShopByCategories = () => {
  const state = useSelector(state => state.shop);
  console.log(state);
  return (
    <div className={`block ${s.shopBlock}`}>
      <div className={`container ${s.shopContainer}`}>
        <h2 className={s.shopHeader} id="shop">
          {state.title}
        </h2>
        <ul className={s.shopList}>
          <li className={s.shopListItem}>
            <picture>
              <source
                srcSet={`${state.images.img1.webp.x2} 2x, ${state.images.img1.webp.x1} 1x`}
                type="image/webp"
              />
              <source
                srcSet={`${state.images.img1.jpg.x2} 2x, ${state.images.img1.jpg.x1} 1x`}
                type="image/jpeg"
              />
              <img
                className={s.shopImage}
                src={state.images.img1.jpg.x1}
                alt="bush"
                loading="lazy"
              />
            </picture>
          </li>
          <li className={s.shopListItem}>
            <picture>
              <source
                srcSet={`${state.images.img2.webp.x2} 2x, ${state.images.img2.webp.x1} 1x`}
                type="image/webp"
              />
              <source
                srcSet={`${state.images.img2.jpg.x2} 2x, ${state.images.img2.jpg.x1} 1x`}
                type="image/jpeg"
              />
              <img
                className={s.shopImage}
                src={state.images.img2.jpg.x1}
                alt="flowerpot"
                loading="lazy"
              />
            </picture>
          </li>
          <li className={s.shopListItem}>
            <picture>
              <source
                srcSet={`${state.images.img3.webp.x2} 2x, ${state.images.img3.webp.x1} 1x`}
                type="image/webp"
              />
              <source
                srcSet={`${state.images.img3.jpg.x2} 2x, ${state.images.img3.jpg.x1} 1x`}
                type="image/jpeg"
              />
              <img
                className={s.shopImage}
                src={state.images.img3.jpg.x1}
                alt="leaf"
                loading="lazy"
              />
            </picture>
          </li>
          <li className={s.shopListItem}>
            <picture>
              <source
                srcSet={`${state.images.img4.webp.x2} 2x, ${state.images.img4.webp.x1} 1x`}
                type="image/webp"
              />
              <source
                srcSet={`${state.images.img4.jpg.x2} 2x, ${state.images.img4.jpg.x1} 1x`}
                type="image/jpeg"
              />
              <img
                className={s.shopImage}
                src={state.images.img4.jpg.x1}
                alt="fern"
                loading="lazy"
              />
            </picture>
          </li>
        </ul>
        <picture>
          <source
            srcSet={`${state.images.img5.webp.x2} 2x, ${state.images.img5.webp.x1} 1x`}
            type="image/webp"
          />
          <source
            srcSet={`${state.images.img5.jpg.x2} 2x, ${state.images.img5.jpg.x1} 1x`}
            type="image/jpeg"
          />
          <img
            className={s.shopBottomImage}
            src={state.images.img5.jpg.x1}
            alt="horsetail"
          />
        </picture>
      </div>
    </div>
  );
};
export default ShopByCategories;
