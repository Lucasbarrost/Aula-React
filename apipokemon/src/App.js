// Importando módulos necessários
import React from 'react';
import './Styles/App.css'; // Importando estilos globais
import PokemonList from './components/PokemonList';// Importando o componente PokemonList

function App() {
  return (
    <div className="App">
      <h1>Pokémon App</h1>
      <PokemonList />
    </div>
  );
}

export default App;
