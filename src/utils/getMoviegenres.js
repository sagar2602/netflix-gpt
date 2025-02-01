export const getMoviegenres = (movieObj) => {
  const genres = movieObj?.genres?.map((movie) => {
    return movie.name
  })
  return genres?.join(" • ");
}