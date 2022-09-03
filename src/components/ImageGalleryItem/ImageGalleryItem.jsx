import React from 'react';
import { memo } from 'react'; //! +++
import PropTypes from 'prop-types';

import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css' 



const ImageGalleryItem = ({ hits }) => (
// export const ImageGalleryItem = ({ hits }) => (  //*
        <>
          {hits.map(({ id, webformatURL, largeImageURL }) => (
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


ImageGalleryItem.propTypes = {
  hits: PropTypes.array.isRequired,
  
};

//! Компонент ImageGalleryItem будет перерисовываться (перерендываться)
//! только при изменении пропса { hits }
export default memo(ImageGalleryItem); //! +++
// export default React.memo(ImageGalleryItem); //! +++ или так, но без: import { memo } from 'react';
