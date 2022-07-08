import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addPokemons } from "../store/pokemonsSlice";
import Alert from "./Alert";
import Loader from "./Loader";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "../models";
import InfiniteScroll from "react-infinite-scroll-component";

const PokemonGallery = () => {
  const fetchingState = useAppSelector((state) => state.pokemons.status);
  const pokemonsList = useAppSelector((state) => state.pokemons.pokemons_list);
  const next = useAppSelector((state) => state.pokemons.next);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addPokemons(undefined));
  }, [dispatch]);

  const fetchMore = () => {
    dispatch(addPokemons(next));
  };

  return (
    <>
      {fetchingState === "failed" && (
        <div className="container mx-auto flex justify-center">
          <Alert type="danger" message="Something went wrong!" />
        </div>
      )}
      <div className="container px-3 py-2 mx-auto lg:pt-12 lg:px-16 flex flex-wrap justify-center">
        <InfiniteScroll
          className="container px-3 py-2 mx-auto lg:pt-12 lg:px-16 flex flex-wrap justify-center"
          dataLength={pokemonsList.length}
          next={fetchMore}
          hasMore={true}
          loader={""}
          scrollThreshold="1px"
        >
          {pokemonsList.map((pokemon: Pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </InfiniteScroll>
      </div>
      {fetchingState === "loading" && <Loader />}
    </>
  );
};

export default PokemonGallery;
