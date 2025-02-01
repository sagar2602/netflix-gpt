const formatRuntime = (movieTime) => {
  if (!movieTime) return '';
  const hours = Math.floor(movieTime / 60);
  const mins = movieTime % 60;
  return `${hours}h ${mins}m`;
}

export const getMovieRuntime = (movie) => {
  return (movie?.runtime) ? formatRuntime(movie?.runtime) : movie?.number_of_episodes;
}