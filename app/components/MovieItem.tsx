import Image from "next/image";
import Link from "next/link";
import { FaRegThumbsUp } from "react-icons/fa";
import { Movie } from "../types";

interface Props {
  movie: Movie;
}

const MovieItem = ({ movie }: Props) => {
  return (
    <article
      className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg
      sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group"
    >
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-70 transition-opacity duration-200"
          style={{ maxWidth: "100%", height: "auto" }}
          alt="image is not available"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{movie.overview}</p>
          <h2 className="truncate text-lg font-bold">{movie.title || movie.name}</h2>
          <p className="flex items-center">
            {movie.release_date || movie.first_air_date}
            <FaRegThumbsUp className='h-5 mr-1 ml-3' /> {movie.vote_count}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default MovieItem;
