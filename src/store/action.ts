import { createAction } from "@reduxjs/toolkit";
import { TOffer } from "../types/offer";
import { AuthorizationStatus } from "../const";

export const setCity = createAction<{selectedCity: string}>('city/setCity');

export const fillOffers = createAction<TOffer[]>('offers/fillOffers');
export const loadOffers = createAction<TOffer[]>('offers/loadOffers');
export const setOfferDataLoadingStatus = createAction<boolean>('offers/setOfferDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');