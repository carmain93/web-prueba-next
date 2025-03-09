"use client";
import React, { useEffect, useState } from "react";

const Pokemonpage = () => {
  const [pokemons, setPokemons] = useState(null); // Inicialmente null para evitar Hydration Error

  useEffect(() => {
    async function getPokemons() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
        );
        const data = await response.json();
        setPokemons(data.results); // Guarda solo la lista de Pokémon
      } catch (error) {
        console.error("Error:", error);
      }
    }

    getPokemons();
  }, []);

  // Si aún no hay datos, renderiza un loader
  if (!pokemons) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Pokemones</h1>
      <div className="grid grid-cols-3 gap-4">
        {pokemons.map((pokemon, index) => (
          <div
            key={index}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {pokemon.name.toUpperCase()}
            </h2>
            <a
              href={pokemon.url}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver detalles
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokemonpage;

