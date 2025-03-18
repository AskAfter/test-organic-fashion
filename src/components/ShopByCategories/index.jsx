import { useSelector } from 'react-redux';

import s from './ShopByCategories.module.scss';

const ShopByCategories = () => {
  const state = useSelector(state => state.shop);
  const navState = useSelector(state => state.navigation.nav);
  const navItem = navState.find(item => item.id === 'shop');

  return (
    <div className={`block ${s.shopBlock}`}>
      <div className={`container ${s.shopContainer}`}>
        <h2 className={s.shopHeader} id={navItem.id}>
          {state.title}
        </h2>
        <ul className={s.shopList}>
          {state.images.map(image => (
            <li className={s.shopListItem} key={image.id}>
              <picture>
                <source
                  srcSet={`${image.webp.x2} 2x, ${image.webp.x1} 1x`}
                  type="image/webp"
                />
                <source
                  srcSet={`${image.jpg.x2} 2x, ${image.jpg.x1} 1x`}
                  type="image/jpeg"
                />
                <img
                  className={s.shopImage}
                  src={image.jpg.x1}
                  alt={image.alt}
                  loading="lazy"
                />
              </picture>
            </li>
          ))}
        </ul>
        <div className={s.shopImageContainer}>
          <picture>
            <source
              srcSet={`${state.image.webp.x2} 2x, ${state.image.webp.x1} 1x`}
              type="image/webp"
            />
            <source
              srcSet={`${state.image.jpg.x2} 2x, ${state.image.jpg.x1} 1x`}
              type="image/jpeg"
            />
            <img
              className={s.shopBottomImage}
              src={state.image.jpg.x1}
              alt={state.image.alt}
            />
          </picture>
        </div>
      </div>
    </div>
  );
};
export default ShopByCategories;
