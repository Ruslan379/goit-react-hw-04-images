import React from 'react';
import { memo } from 'react'; //! +++
import PropTypes from 'prop-types';

import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css' 


 

//! Компонент ImageGalleryItem будет перерисовываться (перерендываться)
//! только при изменении пропса { hits }

// function ImageGalleryItem({ hits }) { //! + export default memo(ImageGalleryItem); ==> так не работает ВООБЩЕ!!!
// export default memo(function ImageGalleryItem({ hits }) { //! ==> так не работают ImageGalleryItem.propTypes
// const memo(ImageGalleryItem = ({ hits }) => (  //! + export default ImageGalleryItem; ==> так не работает ВООБЩЕ!!!

const ImageGalleryItem = ({ hits }) => (  //* + export default memo(ImageGalleryItem); ==> так РАБОТАЕТ!!!
  <>
    {hits.map(({ id, webformatURL }) => (
      <li
        key={id}
        className={css.ImageGalleryItem}
      >
        <img
          className={css.ImageGalleryItemImage}
          src={webformatURL}
          alt=""
        />
      </li>
    ))}
  </>
);
// );  //* для const
// )); //* для const и memo
// };  //* для function
// }); //* для function и memo


ImageGalleryItem.propTypes = {
  hits: PropTypes.array.isRequired,
};

//! Компонент ImageGalleryItem будет перерисовываться (перерендываться)
//! только при изменении пропса { hits }
export default memo(ImageGalleryItem); //* +++
// export default React.memo(ImageGalleryItem); //* +++ или так, но без: import { memo } from 'react';
