import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {TOffer} from '../types/offer';
import { loadOffers, setOfferDataLoadingStatus } from './action.js';

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
