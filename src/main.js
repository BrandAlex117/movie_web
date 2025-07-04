async function getTrendingMoviesPreview() {
  const res = await fetch("http://api.themoviedb.org/3/movie/top_rated?api_key=c0671e6f9542c2bd0766d08c6b73e2cb");
  const data = await res.json();

  const movies = data.results;
  console.log({data, movies});
}


getTrendingMoviesPreview();