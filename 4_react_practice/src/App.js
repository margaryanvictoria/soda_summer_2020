import React from 'react';
import Movies from './components/Movies';
import ShoppingCart from './components/ShoppingCart';
import RenderComponent from './components/RenderComp';

function App() {
  const movies = [
    {
        name: "Star Wars",
        genre: "Sci-Fi",
        year: 1234,
        price: 10.0
    },
    {
        name: "Law Abiding Citizen",
        genre: "Suspense",
        year: 1231,
        price: 12.0
    },
    {
        name: "Ready Player One",
        genre: "Action & Adventure",
        year: 3494,
        price: 8.50
    },
    {
        name: "Star Trek: Into Darkness",
        genre: "Sci-Fi",
        year: 2039,
        price: 99.0
    },
    {
        name: "The Fast and the Furious",
        genre: "Action",
        year: 2939,
        price: 15.25
  }];

  const [compState, setCompState] = React.useState(-1);
  const [data, setData] = React.useState([]);

  return (
    <div style={{textAlign:'center'}}>
      <button style={{width:"100px", height:"50px"}} onClick={()=>{
        setCompState(0);
        setData(movies)
      }}>Movies</button>
      <button style={{width:"100px", height:"50px"}} onClick={()=>{
        setCompState(1);
        setData()
      }}>ShoppingCart</button>
      <button style={{width:"100px", height:"50px"}} onClick={()=>{
        setCompState(-1);
      }}>Clear</button>
      <RenderComponent comp={compState} data={data}/>
      {/* <ShoppingCart />
      <div>.</div>
      <Movies movies={movies} /> */}
    </div>
  );
}

export default App;
