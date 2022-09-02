import React from 'react';
import PropTypes from 'prop-types';

import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css' 




export const ImageGalleryItem = ({ hits }) => (
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

