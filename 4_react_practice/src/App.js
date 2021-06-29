import React from 'react';
import Movies from './components/Movies';
import ShoppingCart from './components/ShoppingCart';
import RenderComponent from './components/RenderComp';
import mockData from './data/mockData';

function App() {
  const movies = mockData.movies;

  const [compState, setCompState] = React.useState(-1);
  const [data, setData] = React.useState([]);

  return (
    <>
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
      </div>
      <RenderComponent comp={compState} data={data}/>
    </>
  );
}

export default App;
