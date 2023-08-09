import { createReducer } from "@reduxjs/toolkit";
import { offers } from "../mocks/offers";

const initialState = {
  selectedCity: 'Amsterdam',
  offers: offers,
}

const reducer = createReducer(initialState, (builder) => {
  builder.addCase('SET_CITY', (state) => {
    state.selectedCity = 'Amsterdam';
  });
});