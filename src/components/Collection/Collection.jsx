import s from './Collection.module.scss';

import img1x1Webp from '../../assets/images/newCollection/img-1@1x.webp';
import img1x2Webp from '../../assets/images/newCollection/img-1@2x.webp';
import img1x1Jpg from '../../assets/images/newCollection/img-1@1x.png';
import img1x2Jpg from '../../assets/images/newCollection/img-1@2x.png';

import img2x1Webp from '../../assets/images/newCollection/img-2@1x.webp';
import img2x2Webp from '../../assets/images/newCollection/img-2@2x.webp';
import img2x1Jpg from '../../assets/images/newCollection/img-2@1x.png';
import img2x2Jpg from '../../assets/images/newCollection/img-2@2x.png';

import img3x1Webp from '../../assets/images/newCollection/img-3@1x.webp';
import img3x2Webp from '../../assets/images/newCollection/img-3@2x.webp';
import img3x1Jpg from '../../assets/images/newCollection/img-3@1x.png';
import img3x2Jpg from '../../assets/images/newCollection/img-3@2x.png';

const Collection = () => {
  return (
    <div className={`block ${s.collectionBlock}`}>
      <div className={s.rectangular}></div>
      <div className={`container ${s.collectionContainer}`}>
        <h2 className={s.collectionHeader}>New Collection</h2>
        <ul className={s.collectionList}>
          <li className={s.collectionListItem}>
            <picture>
              <source
                srcSet={`${img1x2Webp} 2x, ${img1x1Webp} 1x`}
                type="image/webp"
              />
              <source
                srcSet={`${img1x2Jpg} 2x, ${img1x1Jpg} 1x`}
                type="image/jpeg"
              />
              <img className={s.collectionImage} src={img1x1Jpg} alt="bush" />
            </picture>
          </li>
          <li className={s.collectionListItem}>
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
                className={s.collectionImage}
                src={img2x1Jpg}
                alt="flowerpot"
              />
            </picture>
          </li>
          <li className={s.collectionListItem}>
            <picture>
              <source
                srcSet={`${img3x2Webp} 2x, ${img3x1Webp} 1x`}
                type="image/webp"
              />
              <source
                srcSet={`${img3x2Jpg} 2x, ${img3x1Jpg} 1x`}
                type="image/jpeg"
              />
              <img className={s.collectionImage} src={img3x1Jpg} alt="leaf" />
            </picture>
          </li>
        </ul>
        <p className={s.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
};
export default Collection;
