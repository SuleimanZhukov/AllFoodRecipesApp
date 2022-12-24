const service = (url, method) => {
  fetch(url, {
    method,
    headers: {
      'X-RapidAPI-Key': '9ab406257amshd9006a0da5a3631p179ae8jsn079c9be37ff8',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.log(error);
    });
};

export {service};
