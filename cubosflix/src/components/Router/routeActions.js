export const goBack = (history) => {
    history.goBack();
  };

export const goToMovieDetailPage = (history, movieId) => {
    history.push(`/movie-detail/${movieId}`);
  };
  