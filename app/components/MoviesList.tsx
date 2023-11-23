import { Movie } from "../types";
import MovieItem from "./MovieItem";

interface Props {
  movies: Movie[];
}

const MoviesList = ({ movies }: Props) => {
  return (
    <article className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </article>
  );
};

export default MoviesList;
