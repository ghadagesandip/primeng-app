import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getAppState = createFeatureSelector<any>('app');

export const getLoginResponse = createSelector(
    getAppState,
    (state: any) => state
  );