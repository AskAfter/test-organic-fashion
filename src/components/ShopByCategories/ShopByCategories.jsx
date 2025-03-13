import s from './ShopByCategories.module.scss';

import img1x1Webp from '../../assets/images/shopByCategories/img-1@1x.webp';
import img1x2Webp from '../../assets/images/shopByCategories/img-1@2x.webp';
import img1x1Jpg from '../../assets/images/shopByCategories/img-1@1x.jpg';
import img1x2Jpg from '../../assets/images/shopByCategories/img-1@2x.jpg';

import img2x1Webp from '../../assets/images/shopByCategories/img-2@1x.webp';
import img2x2Webp from '../../assets/images/shopByCategories/img-2@2x.webp';
import img2x1Jpg from '../../assets/images/shopByCategories/img-2@1x.jpg';
import img2x2Jpg from '../../assets/images/shopByCategories/img-2@2x.jpg';

import img3x1Webp from '../../assets/images/shopByCategories/img-3@1x.webp';
import img3x2Webp from '../../assets/images/shopByCategories/img-3@2x.webp';
import img3x1Jpg from '../../assets/images/shopByCategories/img-3@1x.jpg';
import img3x2Jpg from '../../assets/images/shopByCategories/img-3@2x.jpg';

import img4x1Webp from '../../assets/images/shopByCategories/img-4@1x.webp';
import img4x2Webp from '../../assets/images/shopByCategories/img-4@2x.webp';
import img4x1Jpg from '../../assets/images/shopByCategories/img-4@1x.jpg';
import img4x2Jpg from '../../assets/images/shopByCategories/img-4@2x.jpg';

import img5x1Webp from '../../assets/images/shopByCategories/img-5@1x.webp';
import img5x2Webp from '../../assets/images/shopByCategories/img-5@2x.webp';
import img5x1Jpg from '../../assets/images/shopByCategories/img-5@1x.jpg';
import img5x2Jpg from '../../assets/images/shopByCategories/img-5@2x.jpg';

const ShopByCategories = () => {
  return (
    <div className={`block ${s.shopBlock}`}>
      <div className={`container ${s.shopContainer}`}>
        <h2 className={s.shopHeader} id="shop">
          Shop by categories
        </h2>
        <ul className={s.shopList}>
          <li className={s.shopListItem}>
            <picture>
              <source
                srcSet={`${img1x2Webp} 2x, ${img1x1Webp} 1x`}
                type="image/webp"
              />
              <source
                srcSet={`${img1x2Jpg} 2x, ${img1x1Jpg} 1x`}
                type="image/jpeg"
              />
              <img
                className={s.shopImage}
                src={img1x1Jpg}
                alt="bush"
                loading="lazy"
              />
            </picture>
          </li>
          <li className={s.shopListItem}>
            <picture>
              <source
                srcSet={`${img2x2Webp} 2x, ${img2x1Webp} 1x`}
                type="image/webp"
              />
              <source
                srcSet={`${img2x2Jpg} 2x, ${img2x1Jpg} 1x`}
                type="image/jpeg"
              />
              <img
                className={s.shopImage}
                src={img2x1Jpg}
                alt="flowerpot"
                loading="lazy"
              />
            </picture>
          </li>
          <li className={s.shopListItem}>
            <picture>
              <source
                srcSet={`${img3x2Webp} 2x, ${img3x1Webp} 1x`}
                type="image/webp"
              />
              <source
                srcSet={`${img3x2Jpg} 2x, ${img3x1Jpg} 1x`}
                type="image/jpeg"
              />
              <img
                className={s.shopImage}
                src={img3x1Jpg}
                alt="leaf"
                loading="lazy"
              />
            </picture>
          </li>
          <li className={s.shopListItem}>
            <picture>
              <source
                srcSet={`${img4x2Webp} 2x, ${img4x1Webp} 1x`}
                type="image/webp"
              />
              <source
                srcSet={`${img4x2Jpg} 2x, ${img4x1Jpg} 1x`}
                type="image/jpeg"
              />
              <img
                className={s.shopImage}
                src={img4x1Jpg}
                alt="fern"
                loading="lazy"
              />
            </picture>
          </li>
        </ul>
        <picture>
          <source
            srcSet={`${img5x2Webp} 2x, ${img5x1Webp} 1x`}
            type="image/webp"
          />
          <source
            srcSet={`${img5x2Jpg} 2x, ${img5x1Jpg} 1x`}
            type="image/jpeg"
          />
          <img className={s.shopBottomImage} src={img5x1Jpg} alt="horsetail" />
        </picture>
      </div>
    </div>
  );
};
export default ShopByCategories;
