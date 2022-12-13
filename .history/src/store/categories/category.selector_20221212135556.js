import { createSelector } from 'reselect'

const selectCatogoryReducer = (state) => {

  return state.categories
}

export const selectCategories = createSelector(
  [selectCatogoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories
  }
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, category) => {
    console.log('selector fired 3')
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
)
