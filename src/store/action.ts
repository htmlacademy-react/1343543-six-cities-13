import { createAction } from "@reduxjs/toolkit";
import { TOffer } from "../types/offer";

export const setCity = createAction<{selectedCity: string}>('city/setCity');

export const fillOffers = createAction<TOffer[]>('offers/fillOffers');
export const loadOffers = createAction<TOffer[]>('offers/loadOffers');
export const setOfferDataLoadingStatus = createAction<boolean>('offers/setOfferDataLoadingStatus');