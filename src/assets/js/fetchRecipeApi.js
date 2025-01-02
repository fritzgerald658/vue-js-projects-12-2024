export const fetchRecipeApi = async (ingredients) => {
  try {
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.value}`;
    const apiKey = "5a6d1cf9acef46f6958db8c4ebb8feb5";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": apiKey,
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
