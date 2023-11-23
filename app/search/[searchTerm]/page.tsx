import MoviesList from "@/app/components/MoviesList";

interface Props {
  params: {
    searchTerm: string;
  };
}

const SearchPage = async ({ params }: Props) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const { results: movies } = await res.json();

  return (
    <div>
      {movies && movies.length && (
        <h1 className="text-center pt-6">No movies found</h1>
      )}
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};

export default SearchPage;
