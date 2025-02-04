const getRelatedMovies = async (apiURL, headers) => {
  const resObj = await fetch(apiURL, headers);
  const data = await resObj.json();
  return data;
}

export const getSimilarMovies = async (apiURL, movieId, headers) => {
  const API = apiURL.replace('{movie_id}', movieId);
  const moviesData = await getRelatedMovies(API, headers);
  return moviesData;
}