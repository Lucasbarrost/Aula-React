// Importando módulos necessários
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/PokemonList.css'; // Importando estilos CSS para o componente PokemonList

// Componente PokemonList
const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]); // Estado para armazenar a lista de pokemons

  // Efeito que carrega a lista de pokemons ao montar o componente
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20'); // Requisição GET para a API de pokemons
      setPokemonList(response.data.results); // Atualiza o estado com a lista de pokemons
    };

    fetchPokemon(); // Chamada da função fetchPokemon() para carregar os dados
  }, []); // Dependência vazia para executar apenas uma vez ao montar o componente

  // Renderiza o componente
  return (
    <div className="pokemon-list">
      <h2>Pokémon List</h2>
      <ul>
        {/* Mapeia a lista de pokemons e renderiza um componente Pokemon para cada um */}
        {pokemonList.map((pokemon, index) => (
          <Pokemon key={index} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
};

// Componente Pokemon
const Pokemon = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null); // Estado para armazenar os dados do pokemon

  // Efeito que carrega os dados do pokemon ao montar o componente
  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await axios.get(pokemon.url); // Requisição GET para obter os dados do pokemon
      setPokemonData(response.data); // Atualiza o estado com os dados do pokemon
    };

    fetchPokemonData(); // Chamada da função fetchPokemonData() para carregar os dados
  }, [pokemon]); // Dependência pokemon para carregar dados sempre que o pokemon mudar

  // Retorna null se pokemonData ainda não estiver carregado
  if (!pokemonData) return null;

  // Renderiza o componente do pokemon
  return (
    <li className="pokemon-item">
      <img src={pokemonData.sprites.front_default} alt={pokemon.name} /> {/* Imagem do pokemon */}
      <span>{pokemon.name}</span> {/* Nome do pokemon */}
    </li>
  );
};

export default PokemonList; // Exporta o componente PokemonList