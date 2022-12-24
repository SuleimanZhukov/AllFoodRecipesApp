import {all} from 'redux-saga/effects';
import recipesSaga from './recipesSaga';

export default function* rootSaga() {
  yield all([recipesSaga]);
}
