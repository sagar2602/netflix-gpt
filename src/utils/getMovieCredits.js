const getMovieCasts = async (apiURL, headers) => {
  const resObj = await fetch(apiURL, headers);
  const data = await resObj.json();
  return data;
}

const sortBasedOnPopularity = (casts) => {
  casts.sort((a, b) => b.popularity - a.popularity);
  return casts;
}

export const getMovieCredits = async (apiUrl, id, headers) => {
  const API = apiUrl.replace('{movie_id}', id);
  // Have to use async - await here as well otherwise obove getMoviesCasts returning promise.
  const creditsData = await getMovieCasts(API, headers);
  let popularCredits = sortBasedOnPopularity(creditsData?.cast);
  popularCredits = popularCredits.slice(0, 10).map(cast => cast.original_name);
  return popularCredits?.join(" • ");
}