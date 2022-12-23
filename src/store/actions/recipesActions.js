import C from '../constants';

const getAllRecipes = payload => ({
  type: C.GET_ALL_RECIPES_REQUEST,
  payload,
});

export default {
  getAllRecipes,
};
