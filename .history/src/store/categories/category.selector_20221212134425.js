import { createSelector } from 'reselect'

const add = (a, b) => a + b
add(3,4)
export const selectCategoriesMap = (state) => {
  console.log('selector fired')
  return state.categories.categories.reduce((acc, category) => {
    const { title, items } = category
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
}
