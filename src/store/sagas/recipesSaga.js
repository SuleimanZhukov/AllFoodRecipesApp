import {call, takeEvery, put} from 'redux-saga/effects';
import C from '../constants';
import Api from '../../services/api/calls';
import {getAllRecipesAction} from '../actions/recipesActions';

function* getAllRecipes(action) {
  try {
    const response = yield call(Api.getAllRecipes, action.payload);

    if (response && response.data) {
      yield put(
        getAllRecipesAction({
          type: C.GET_ALL_RECIPES_SUCCEED,
          payload: response.data,
        }),
      );
    }
  } catch (error) {
    yield put(getAllRecipesAction({type: C.GET_ALL_RECIPES_FAIL, error: true}));
  }
}

function* recipesSaga() {
  return takeEvery(C.GET_ALL_RECIPES_REQUEST, getAllRecipes);
}

export default recipesSaga;
