import Movie from './components/Movie';

function App() {
  const movies = [
    {
        name: "Star Wars",
        genre: "Sci-Fi",
        year: 1234
    },
    {
        name: "Law Abiding Citizen",
        genre: "Suspense",
        year: 1231
    },
    {
        name: "Ready Player One",
        genre: "Action & Adventure",
        year: 3494
    },
    {
        name: "Star Trek: Into Darkness",
        genre: "Sci-Fi",
        year: 2039
    },
    {
        name: "The Fast and the Furious",
        genre: "Action",
        year: 2939
    }];

  return (
    <div>
      {movies.map((movie, index) => {
        return <Movie key={index} movie={movie} />
      })}
    </div>
  );
}

export default App;
