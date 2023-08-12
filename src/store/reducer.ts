import { createReducer } from "@reduxjs/toolkit";
import { fillOffers, setCity, loadOffers, setOfferDataLoadingStatus } from "./action";
import { TOffer } from "../types/offer";

type InitialState = {
  selectedCity: string;
  offers: TOffer[];
  filteredOffers: TOffer[];
  isOffersLoading: boolean;
}

const initialState: InitialState = {
  selectedCity: 'Paris',
  offers: [],
  filteredOffers: [],
  isOffersLoading: false,
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.selectedCity = action.payload['selectedCity'];
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    });
});

export {reducer}