import axios from 'axios';
import { useQuery } from 'react-query';

const fetchMovies = () => axios.get('http://localhost:3100/movies');

const Movies = () => {
  const { isLoading, data, isError, error } = useQuery(
    'all-movies',
    fetchMovies,
    {
      cacheTime: 10000, // how long we want the result to be cached, default is 5 mins
      staleTime: 20000, // no new requests will be made for 20 seconds, default is 0 seconds
    }
  );

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>Movies</h1>
      {data?.data.movies.map((movie) => {
        return (
          <div key={movie._id}>
            <h3>{movie.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
