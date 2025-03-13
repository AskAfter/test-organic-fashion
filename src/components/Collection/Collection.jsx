import s from './Collection.module.scss';

import img1x1Webp from '../../assets/images/newCollection/img-1@1x.webp';
import img1x2Webp from '../../assets/images/newCollection/img-1@2x.webp';
import img1x1Png from '../../assets/images/newCollection/img-1@1x.png';
import img1x2Png from '../../assets/images/newCollection/img-1@2x.png';

import img1x1Webpx1920 from '../../assets/images/newCollection/img-1x1920@1x.webp';
import img1x2Webpx1920 from '../../assets/images/newCollection/img-1x1920@2x.webp';
import img1x1Pngx1920 from '../../assets/images/newCollection/img-1x1920@1x.png';
import img1x2Pngx1920 from '../../assets/images/newCollection/img-1x1920@2x.png';

import img2x1Webp from '../../assets/images/newCollection/img-2@1x.webp';
import img2x2Webp from '../../assets/images/newCollection/img-2@2x.webp';
import img2x1Png from '../../assets/images/newCollection/img-2@1x.png';
import img2x2Png from '../../assets/images/newCollection/img-2@2x.png';

import img2x1Webpx1920 from '../../assets/images/newCollection/img-2x1920@1x.webp';
import img2x2Webpx1920 from '../../assets/images/newCollection/img-2x1920@2x.webp';
import img2x1Pngx1920 from '../../assets/images/newCollection/img-2x1920@1x.png';
import img2x2Pngx1920 from '../../assets/images/newCollection/img-2x1920@2x.png';

import img3x1Webp from '../../assets/images/newCollection/img-3@1x.webp';
import img3x2Webp from '../../assets/images/newCollection/img-3@2x.webp';
import img3x1Png from '../../assets/images/newCollection/img-3@1x.png';
import img3x2Png from '../../assets/images/newCollection/img-3@2x.png';

import img3x1Webpx1920 from '../../assets/images/newCollection/img-3x1920@1x.webp';
import img3x2Webpx1920 from '../../assets/images/newCollection/img-3x1920@2x.webp';
import img3x1Pngx1920 from '../../assets/images/newCollection/img-3x1920@1x.png';
import img3x2Pngx1920 from '../../assets/images/newCollection/img-3x1920@2x.png';

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
                media="(min-width: 1920px)"
                srcSet={`${img1x2Webpx1920} 2x, ${img1x1Webpx1920} 1x`}
                type="image/webp"
              />
              <source
                media="(min-width: 1920px)"
                srcSet={`${img1x2Pngx1920} 2x, ${img1x1Pngx1920} 1x`}
                type="image/png"
              />
              <source
                srcSet={`${img1x2Webp} 2x, ${img1x1Webp} 1x`}
                type="image/webp"
              />
              <source
                srcSet={`${img1x2Png} 2x, ${img1x1Png} 1x`}
                type="image/png"
              />
              <img className={s.collectionImage} src={img1x1Png} alt="bush" />
            </picture>
          </li>
          <li className={s.collectionListItem}>
            <picture>
              <source
                media="(min-width: 1920px)"
                srcSet={`${img2x2Webpx1920} 2x, ${img2x1Webpx1920} 1x`}
                type="image/webp"
              />
              <source
                media="(min-width: 1920px)"
                srcSet={`${img2x2Pngx1920} 2x, ${img2x1Pngx1920} 1x`}
                type="image/png"
              />
              <source
                srcSet={`${img2x2Webp} 2x, ${img2x1Webp} 1x`}
                type="image/webp"
              />
              <source
                srcSet={`${img2x2Png} 2x, ${img2x1Png} 1x`}
                type="image/png"
              />
              <img
                className={s.collectionImage}
                src={img2x1Png}
                alt="flowerpot"
              />
            </picture>
          </li>
          <li className={s.collectionListItem}>
            <picture>
              <source
                media="(min-width: 1920px)"
                srcSet={`${img3x2Webpx1920} 2x, ${img3x1Webpx1920} 1x`}
                type="image/webp"
              />
              <source
                media="(min-width: 1920px)"
                srcSet={`${img3x2Pngx1920} 2x, ${img3x1Pngx1920} 1x`}
                type="image/png"
              />
              <source
                srcSet={`${img3x2Webp} 2x, ${img3x1Webp} 1x`}
                type="image/webp"
              />
              <source
                srcSet={`${img3x2Png} 2x, ${img3x1Png} 1x`}
                type="image/png"
              />
              <img className={s.collectionImage} src={img3x1Png} alt="leaf" />
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
