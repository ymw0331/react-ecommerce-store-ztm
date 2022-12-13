import { createSelector } from 'reselect'

const selectCatogoryReducer = (state) => state.categories

export const selectCategories = createSelector(
  [selectCatogoryReducer],
  (categoriesSlice) => {
    console.log('selector fired')
    return categoriesSlice.categories
  }
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, category) => {
    console.log('selector fired')
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
)
