const ListMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie, key) => (
        <li
          key={key}
        >{`Original Title: ${movie.original_title} --- Rate: ${movie.vote_average}`}</li>
      ))}
    </ul>
  );
};

export default ListMovies;
