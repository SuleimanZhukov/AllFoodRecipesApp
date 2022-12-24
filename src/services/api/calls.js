import {service} from '../service';

const apiUrl = 'https://example.com/api/';

const getAllRecipes = payload => {
  const url = `${apiUrl}recipes`;
  return service(url, 'GET', payload);
};

export {getAllRecipes};
