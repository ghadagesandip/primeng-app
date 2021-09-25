import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getLoginState = createFeatureSelector<any>('loginStore');

export const getLoginResponse = createSelector(
    getLoginState,
    (state: any) => state
  );