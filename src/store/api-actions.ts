import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {TOffer} from '../types/offer';
import { loadOffers, requireAuthorization, setOfferDataLoadingStatus } from './action.js';
import { AuthorizationStatus } from '../const.js';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuestions',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOfferDataLoadingStatus(true));
    const {data} = await api.get<TOffer[]>(`/offers`);
    dispatch(setOfferDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const result = await api.get(`/login`);
      console.log(result);
      dispatch(requireAuthorization(AuthorizationStatus.Auth))
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth))
    }
  },
);


