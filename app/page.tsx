import MoviesList from "./components/MoviesList";

const API_KEY = process.env.API_KEY;

interface Props {
  searchParams: {
    genre?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`, { next: { revalidate: 100 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  const { results } = await res.json();

  return (
    <article>
      <MoviesList movies={results} />
    </article>
  );
}
