import { Movie } from "../types";

interface Props {
  movies: Movie[];
}

const MoviesList = ({ movies }: Props) => {
  return <div>{movies.map(movie => (
    <div key={movie.id}>{movie.original_title}</div>
  ))}</div>;
};

export default MoviesList;
