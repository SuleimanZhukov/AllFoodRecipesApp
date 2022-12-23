import C from '../constants';

const initialState = {
  pending: false,
  success: false,
  error: null,
  recipesList: [],
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.GET_ALL_RECIPES_REQUEST:
      return (state = {
        ...state,
        pending: true,
      });

    case C.GET_ALL_RECIPES_SUCCEED:
      return (state = {
        ...state,
        success: true,
        payload: action.payload,
      });

    case C.GET_ALL_RECIPES_FAIL:
      return (state = {
        ...state,
        error: true,
      });

    default:
      return state;
  }
};

export default recipesReducer;
