import { useEffect, useState, useRef, useCallback } from 'react';
import { firebaseDatabase } from '../../firebase/firebase';

import useScrollBox from '../scrollbox/ScrollBox';

const timing = (1 / 60) * 1000;
const decay = (v) => -0.1 * ((1 / timing) ^ 4) + v;

function Row(props) {
  const [movies, setMovies] = useState([]);

  const { title, movieType } = props;

  const leafRoot = 'movies';

  useEffect(() => {
    fetchMovies(movieType);
  }, []);

  const fetchMovies = (movieType) => {
    const movieRef = firebaseDatabase.ref(`${leafRoot}/${movieType}`);
    movieRef.on('value', (snapshot) => {
      const movies = snapshot.val();
      if (movies && movies.length !== 0) {
        setMovies(() => movies);
      }
    });
  };

  const scrollWrapperRef = useRef();
  const { isDragging } = useScrollBox(scrollWrapperRef);
  return (
    <>
      <div className='row'>
        <h2>{title}</h2>
      </div>
      <div className='scroll-box'>
        <div className='scroll-box__wrapper' ref={scrollWrapperRef}>
          <div
            className='scroll-box__container'
            role='list'
            style={{ pointerEvents: isDragging ? 'none' : undefined }}
          >
            {movies.map((movie) => (
              <img
                className='row__poster row__posterLarge'
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.original_name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Row;
