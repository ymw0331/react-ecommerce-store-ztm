import {
  CATEGORIES_ACTION_TYPES,
  Category,
  CategoryItem,
} from './category.types';
import {
  createAction,
  Action,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;
  


  
export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

