import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {PokemonsState} from './../models'
import {fetchPokemons} from './pokemonApi'

const initialState:PokemonsState = {
  pokemons_list: [],
  next: undefined,
  status: 'idle',
  modalOpened: false,
  selectedPokemon: -1,
}

export const addPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async (next: string | undefined) => {
    const response = await fetchPokemons(next);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    closeModal: (state) => {
      state.modalOpened = false;
    },
    openModal: (state, action: PayloadAction<number>) => {
      state.modalOpened = true;
      state.selectedPokemon = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPokemons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addPokemons.fulfilled, (state, action) => {
        state.status = 'idle';
        state.pokemons_list = [...state.pokemons_list, ...action.payload.results];
        state.next = action.payload.next;
      })
      .addCase(addPokemons.rejected, (state) => {
        state.status = 'failed';
      });
  },
 });

export const { openModal, closeModal } = pokemonsSlice.actions;


export default pokemonsSlice.reducer;
