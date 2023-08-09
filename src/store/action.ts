import { createAction } from "@reduxjs/toolkit";

export const setCity = createAction<{selectedCity: string}>('city/setCity');
export const fillOffers = createAction('offers/fillOffers');