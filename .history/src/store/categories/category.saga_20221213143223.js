import { takeLatest, call, all, put } from 'redux-saga/effects'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

import { fetchCategoriesSuccess, fetchCategr } from './category.action'

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart())

  try {
    const categoriesArray = await getCategoriesAndDocuments('categories')
    dispatch(fetchCategoriesSuccess(categoriesArray))
  } catch (error) {
    dispatch(fetchCategoriesFailed(error))
  }
}