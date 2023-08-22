import { createReducer } from "@reduxjs/toolkit";
import { fillOffers, setCity, loadOffers, setOfferDataLoadingStatus, requireAuthorization } from "./action";
import { TOffer } from "../types/offer";
import { AuthorizationStatus } from "../const";

type InitialState = {
  selectedCity: string;
  offers: TOffer[];
  filteredOffers: TOffer[];
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialState = {
  selectedCity: 'Paris',
  offers: [],
  filteredOffers: [],
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;

    });
});

export {reducer}