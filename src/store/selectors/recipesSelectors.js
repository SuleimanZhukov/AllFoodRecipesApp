import {createSelector} from 'reselect';

const recipesState = state => state.recipes;

const getAllRecipesSelector = createSelector(
  recipesState,
  recipesState => recipesState.list,
);

export {getAllRecipesSelector};
