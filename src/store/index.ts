import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pokemonsSliceReducer from './pokemonsSlice';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
