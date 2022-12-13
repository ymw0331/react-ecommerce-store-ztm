export const selectCategoriesMap = (state) => state.categories.categories
  .reduce((acc, categ) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});