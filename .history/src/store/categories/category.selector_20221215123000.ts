import { createSelector } from 'reselect';

import { CategoriesState } from './category.reducer';
import { CategoryMap } from './category.types';

const selectCatogoryReducer = (state): CategoriesState => {
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCatogoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCatogoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
