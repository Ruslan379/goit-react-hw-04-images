import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

import pixabayAPI from 'services/pixabay-api.js';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

import css from 'components/ImageGallery/ImageGallery.module.css' 



export function ImageGallery({ queryNew }) {
  //! useState ===> **** (аналог this.state.****)
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorCatch, setErrorCatch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [largeURL, setLargeURL] = useState("");



  //! Анализ props queryNew и запись его в query
  useEffect(() => {
    setPage(1);
    setQuery(queryNew);
    setHits([]);
    }, [queryNew]);

  
//! Анализ [page, query] + ЗАПРОС
  useEffect(() => {
    //! Первый рендер, если query - это пустая строка, то НЕ ДЕЛАЕМ HTTP-запрос
    if (!query) {
      return;
    };
    setIsLoading(true);
    //! Делаем HTTP-запрос с помощью services/pixabay-api.js
    setTimeout(() => { 
      pixabayAPI
        .fetchPixabay(query, page)
        .then(({ hits, query, endOfCollection }) => {
          if (hits[0] === undefined) {  
            toast.warning(`Нет такой темы: ${query}`); 
            setHits([]);
            setIsLoading(false);
            return;
          } else {
            setHits(prevState => [...prevState, ...hits]);
            setIsLoading(false);
            setShowButton(true);
            };
          //! endOfCollection - это цифра еще НЕ ПРОСМОТРЕННЫХ элементов коллекции
          console.log("endOfCollection: ", endOfCollection); //!
          if (endOfCollection <= 0) {
            toast.info('Вы достигли конца результатов поиска', { autoClose: 3000 }); 
            setShowButton(false); //! Кнопка LOAD MORE => ПРЯЧЕМ
            return;
          }
        })
        //! Обработка ошибок
        .catch(error => {
          setIsLoading(false);
          setErrorCatch(error);
          console.log(error); //!
          toast.error(`Ошибка запроса: ${errorCatch}`, { position: "top-left", autoClose: 2000 } ); 
        });
    }, 1000);
  }, [page, query, errorCatch]);
  

  
  //! Кнопка loadMore
  const loadMore = () => {
    setShowButton(false); //! Кнопка LOAD MORE => ПРЯЧЕМ
    setPage(prevState => prevState + 1);
  };
  


  //! Инверсия showModal для открытия/закрытия МОДАЛКИ
  const toggleModal = () => {
    setShowModal(!showModal);
  }; 



  //! Кликаем в картинку, ищем её largeImageURL, откываем МОДАЛКУ с картинкой
  const handleBackdropClick = event => {
    if (event.target.src) {
      toggleModal()
      const i = hits.findIndex(hit => hit.webformatURL === event.target.src)
      setLargeURL(hits[i].largeImageURL);
    } else return;
  };


    return (
      < >
        {(hits[0] === undefined && isLoading === false) && (
          <div
            style={{ margin: '0 auto' }}
          >
            <h1>Введите тему</h1>
          </div>
        )}
        
        <ul
          className={css.ImageGallery}
          onClick={handleBackdropClick}
        >
          <ImageGalleryItem hits={hits} />
        </ul>

        {isLoading && <Loader />}

        {(hits[0] !== undefined && showButton) && <Button onClick={loadMore} />}

        {showModal && (
          <Modal onClose={toggleModal}>
            <img
              src={largeURL}
              alt=""
            />
          </Modal>
        )}
      </>
    );
  }



ImageGallery.propTypes = {
  query: PropTypes.string
};














//! OLD --------------------------------------------------------------------------
// import React from 'react';
// import PropTypes from 'prop-types';

// // import classNames from 'classnames';

// // import 'components/ContactList/ContactList.css';
// import css from 'components/ImageGallery/ImageGallery.module.css' //todo = старый вариант импорта стилей




// export const ImageGallery = ({ hits }) => (
//         <ul className={css.ImageGallery}>
//           {hits.map(({ id, webformatURL, largeImageURL }) => (
//             <li
//               key={id}
//               // className="gallery-item"
//               className={css.ImageGalleryItem}
//             >
//               <img
//                 className={css.ImageGalleryItemImage}
//                 src={webformatURL}
//                 alt=""
//               />
//           </li>
//           ))}
//         </ul>
// );


// ImageGallery.propTypes = {
//   hits: PropTypes.array.isRequired,
  
// };



// // export default Filter;
