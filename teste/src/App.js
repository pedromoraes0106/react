import logo from './logo.svg';
import './App.css';
import React from 'react';

function Pedro(props)
{
  return <h1>{props.name}Pedro de Carvalho Moraes</h1>;
}

class Pedruco extends React.Component
{
  render()
  {
    return <h1>pedruco</h1>;
  }
}


function App() 
{
  return (
    <div>
      <Pedro name='Olá, '/>
      <Pedruco/>
    </div>
  );
}

export default App;
