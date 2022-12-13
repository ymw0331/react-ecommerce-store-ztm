import { takeLatest, call, all, put } from 'redux-saga/effects'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action'
import { CATEGORIES_ACTION_TYPES } from './category.types'

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart())


}

export function* fetchCategoriesAsync(){

}

export function* onFecthCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, )
}

export function* categoriesSaga() {
  yield all([])


}