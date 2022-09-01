import React from 'react';
import PropTypes from 'prop-types';

import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css' //todo = старый вариант импорта стилей




export const ImageGalleryItem = ({ hits }) => (
        <>
          {hits.map(({ id, webformatURL, largeImageURL }) => (
            <li
              key={id}
              // className="gallery-item"
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



// export default Filter;
