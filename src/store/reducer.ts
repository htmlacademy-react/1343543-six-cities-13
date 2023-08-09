import { createReducer } from "@reduxjs/toolkit";
import { offers } from "../mocks/offers";
import { fillOffers, setCity } from "./action";



const initialState = {
  selectedCity: 'Amsterdam',
  offers: offers,
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      if (action.payload) {
        state.selectedCity = action.payload['city'];
      }
    })
    .addCase(fillOffers, (state, action) => {
      if (action.payload) {
        state.offers = action.payload['offers'];
      }
    });
});

export {reducer}