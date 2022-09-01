import { Component } from 'react';
// import PropTypes from 'prop-types';

// import axios from 'axios';

// import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { Audio } from  'react-loader-spinner'
// // import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// import { Container } from 'components/Container/Container';
// import { Modal } from 'components/Modal/Modal';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
// import { Loader } from 'components/Loader/Loader';
// import { Button } from 'components/Button/Button';


import css from 'components/App/App.module.css' //todo = старый вариант импорта стилей



export class App extends Component {

  // static propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
  // };

  state = {
    page: 1,
    query: '',
    hits: [],
    isLoading: false,
    error: false,
  };


  //! Формируем строку URL-запроса:
  // API_KEY = '28759369-3882e1068ac26fe18d14affeb';
  // BASE_URL = 'https://pixabay.com/api/';
  // per_page = 12;
  // // url = `${this.BASE_URL}?key=${this.API_KEY}&q=${this.state.query}&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=${this.per_page}`; //! with API_KEY
  


//* ================================ МЕТОДЫ ==========================================================
  //? --------------------------------------------------------
  // async componentDidMount() {
  //   try {
  //   this.setState({ isLoading: true })
  //   // setTimeout(() => { //?
  //     const { hits } = await this.fetchHits(this.url)
  //     this.setState({ hits, isLoading: false });
  //         console.log("fetch hits: ", hits); //!
  //         console.log("fetch hits[0]: ", hits[0]); //!
  //         console.log("fetch hits[0].id: ", hits[0].id); //!
  //         console.log("fetch hits[0].webformatURL: ", hits[0].webformatURL); //!
  //       console.log("fetch hits[0].largeImageURL: ", hits[0].largeImageURL); //!
  //   } catch (error) {
  //     this.setState({ error: true, isLoading: false });
  //     console.log(error);
  //     }
  //       // return hits //?
  //       // }) //?
  //       // .then(hits => this.setState({ hits }))  //?
  //       // .finally(() => this.setState({ isLoading: false })); //?
  //   // }, 2000); //?
  // }


  //? перенесен в Searchbar
  // handleChange = event => {
  //   // console.log(event.currentTarget); //!
  //   // console.log(event.currentTarget.name); //!
  //   console.log(event.currentTarget.value); //!

  //   // this.setState({ name: event.currentTarget.value }); //?
  //   // this.setState({ [event.currentTarget.name]: event.currentTarget.value }); //?

  //   const { value } = event.currentTarget;

  //   // if (value.trim() === '') {
  //   //   console.log(value);
  //   //   // alert('Введите имя');
  //   //   toast.error('Введите имя'); //? РАБОТАЕТ, но НЕ ПРАВИЛЬНО!!!
  //   //   return;
  //   // }

  //     this.setState({ query: value });
  // };


//? перенесен в Searchbar
  // handleSubmit = event => {
  //   event.preventDefault();
  //   // console.log(event.target.elements.query.value); //!

  //   if (event.target.elements.query.value === '') {
  //     toast.error('Поле не должно быть пустым'); 
  //     return;
  //   };

  //   this.setState ({
  //     page: 1,
  //     query: event.target.elements.query.value,
  //     hits: [],
  //   });
  //   event.target.reset()
  //   // this.props.onSubmit(name, number);
  //   // this.reset();
  // };
  
  
  //? перенесен в ImageGallery
  //* axios.get-запрос: (с async/await)
  // async fetchHits() {
  //   try { 
  //   // console.log("fetchHits this.state.query: ", this.state.query); //!
  //   const url = `${this.BASE_URL}?key=${this.API_KEY}&q=${this.state.query}&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=${this.per_page}`; 
  //   // console.log("fetchHits: ", url); //!
  //   const response = await axios.get(url);
  //   // const newHits = await response.data;
  //   // const { hits } = newHits;
  //   // console.log(hits); //!
  //   // return hits;
      
  //   return response.data;
  //     } catch (error) { 
  //       this.setState({ error: true, isLoading: false }); 
  //       console.log(error); 
  //   } 
  // };
  
  
  //? перенесен в ImageGallery  
  //* ++++++++++++++++++++++++++++++++++++++++++++
  // async componentDidUpdate(_, prevState) {
  //   try { 
  //     console.log("prevState.page: ", prevState.page); //!
  //     console.log("this.state.page: ", this.state.page); //!
    
  //     console.log("prevState.query: ", prevState.query); //!
  //     console.log("this.state.query: ", this.state.query); //!
      
  //     if (
  //       prevState.page !== this.state.page ||
  //       prevState.query !== this.state.query
  //     ) {
  //       this.setState({ isLoading: true }); 
  //       const { hits } = await this.fetchHits();

  //       //!  Прверка hits на пустой массив:
  //       if (hits[0] === undefined) {
  //         // console.log("undefined hits[0]: ", hits[0]); //!
  //         toast.warning('Нет такой темы'); 
  //         this.setState ({
  //           hits: [],
  //           isLoading: false
  //         });
  //         // console.log("undefined this.state.hits: ", this.state.hits); //!
  //         return;
  //       };

  //       // console.log("prevState.hits: ", prevState.hits); //!
  //       // console.log("this.state.hits: ", this.state.hits); //!
  //       // console.log("fetch hits: ", hits); //!
  //       // this.setState({ hits, isLoading: false }); //? так только 12 новых фото
  //       this.setState(prevState  => ({
  //         hits: [...prevState.hits, ...hits],
  //         isLoading: false
  //       }));
        
  //         // console.log("fetch hits: ", hits); //!
  //         // console.log("fetch hits[0]: ", hits[0]); //!
  //         // console.log("fetch hits[0].id: ", hits[0].id); //!
  //         // console.log("fetch hits[0].webformatURL: ", hits[0].webformatURL); //!
  //         // console.log("fetch hits[0].largeImageURL: ", hits[0].largeImageURL); //!
  //     }
  //   } catch (error) { 
  //     this.setState({ error: true, isLoading: false }); 
  //     console.log(error); 
  //     } 
  // }


  
  //? перенесен в ImageGallery
  //* Кнопка loadMore
  // loadMore = () => {
  //   this.setState(prevState => ({
  //     page: prevState.page + 1,
  //   }));
  // }
  
  
  
  //! Передача пропса this.state.query из Searchbar
  handleFormSubmit = (query) => {
    // console.log("handleFormSubmit query: ", query); //!
    this.setState ({
      page: 1,
      query,
      // hits: [],
    });
    // console.log("handleFormSubmit -> this.state.query: ", this.state.query); //!
  };



//! Передача пропса this.state из ImageGallery (возможно, не нужен...)
  updateState = ({ page, query, hits, isLoading, error}) => {
    // console.log("newState: ", newState); //!
    this.setState ({
      page,
      query,
      hits,
      isLoading,
      error,
    });
    // console.log("updateState -> this.state: ", this.state); //!
  };


//* ================================ RENDER ==========================================================
  render() {
    const { query } = this.state
    //? isLoading - перенесен в ImageGallery
    // const { query, hits, isLoading } = this.state

    // console.log(this.url); //!
    // console.log("render hits: ", hits); //!

    // console.log("render hits[0]: ", hits[0]); //!
    // console.log("render hits[0].id: ", hits[0].id); //!
    
    // console.log("this.state.hits: ", this.state.hits); //!
    // console.log("this.state.hits[0]: ", this.state.hits[0]); //!
    // console.log("this.state.hits[0].id: ", this.state.hits[0].id); //!

    return (
      <div className={css.App}>
        <ToastContainer autoClose={1000} theme={"colored"} />
        
        <Searchbar onSubmit={this.handleFormSubmit} />

        {/* <header className="searchbar">
        <form
          className="form"
          onSubmit={this.handleSubmit}
        >
          <button
            type="submit"
            className="button"
          >
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            name = "query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            // onChange={this.handleChange}
          />
          
        </form>  
        </header> */}
        
        {/* <ImageGallery hits={hits} /> */}
        <ImageGallery
          query={query} 
          onSubmit={this.updateState}
        />
        
        {/* {(hits[0] !== undefined) && <Modal hits={hits} />} */}


        {/* <ul className="gallery"> */}
        {/* <ul className={css.ImageGallery}>
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
        </ul> */}
        
        {/* //? Loader - перенесен в ImageGallery */}
        {/* {isLoading && <Loader />} */}

        {/* {isLoading && <Audio
                        // height = "80"
                        // // width = "80"
                        width = "100%"
                        // radius = "9"
                        // color = 'green'
                        // ariaLabel = 'three-dots-loading'     
                        // wrapperStyle
                        // wrapperClass
                      />
        } */}
        
        {/* //? Кнопка loadMore - перенесен в ImageGallery */}
        {/* {(hits[0] !== undefined) && <Button onClick={this.loadMore} />} */}
        
          {/* <button
            type="button"
            className="button"
            onClick={this.loadMore}
          >
            Load more
          </button> */}
      </div>
    );
  }
}
