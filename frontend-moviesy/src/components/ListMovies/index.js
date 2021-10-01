import styled from "styled-components";
import defaultImg from "./no-image.png";

const Wrapper = styled.div`
  max-width: 1450px;
  padding: 2em;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  background: #f7f7f7;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 30px;
`;

const MovieCard = styled.div`
  display: flex;
  width: 180px;
  height: 375px;
  flex-direction: column;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  margin-bottom: 16px;
  justify-content: space-around;
`;

const MovieImg = styled.div`
  width: 175px;
  height: 275px;
  margin-left: auto;
  margin-right: auto;
  background-image: url(https://image.tmdb.org/t/p/w500/${(props) =>
    props.link});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center center;
`;

const CardInfo = styled.div`
  text-align: center;
`;

const ListMovies = ({ movies }) => {
  return (
    <Wrapper>
      {movies.map((movie, key) => (
        <MovieCard key={key}>
          <MovieImg link={movie.poster_path}> </MovieImg>
          <CardInfo> {`rate: ${movie.vote_average}`}</CardInfo>
          <CardInfo>{`${movie.title}`}</CardInfo>
        </MovieCard>
      ))}
    </Wrapper>
  );
};

export default ListMovies;
