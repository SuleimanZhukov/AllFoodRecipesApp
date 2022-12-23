import C from '../constants';

const getAllRecipesAction = payload => ({
  type: C.GET_ALL_RECIPES_REQUEST,
  payload,
});

export default {
  getAllRecipes,
};
