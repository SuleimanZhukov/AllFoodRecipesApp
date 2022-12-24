import {service} from '../service';

const apiUrl =
  'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/';

const getAllRecipes = payload => {
  const url = `${apiUrl}random?tags=vegetarian%2Cdessert&number=1`;
  return service(url, 'GET');
};

export {getAllRecipes};
