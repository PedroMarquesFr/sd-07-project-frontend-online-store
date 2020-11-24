export function getCategories() {
  return fetch(
    'https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLB/categories',
  )
    .then((req) => req.json())
    .then((json) => json);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const req = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  );
  const json = await req.json();

  return json;
}
