import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {TOffer} from '../types/offer';
import { loadOffers, requireAuthorization, setOfferDataLoadingStatus, redirectToRoute } from './action.js';
import { AuthorizationStatus } from '../const.js';
import { AuthData } from '../types/auth-data.js';
import { UserData } from '../types/user-data.js'; 
import { saveToken } from '../core/token.js';

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

export const sendAuthorizationAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/sendAuth',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token}} = await api.post<UserData>(`/login`, {email, password});
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth))
      dispatch(redirectToRoute('/'));
    } catch {
      console.log('Что-то пошло не так');
    }
  },
);



