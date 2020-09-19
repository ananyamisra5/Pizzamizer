/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPizza = /* GraphQL */ `
  query GetPizza($id: ID!) {
    getPizza(id: $id) {
      id
      name
      ingredients {
        id
        name
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPizzas = /* GraphQL */ `
  query ListPizzas(
    $filter: ModelPizzaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPizzas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        ingredients {
          id
          name
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIngredients = /* GraphQL */ `
  query GetIngredients($id: ID!) {
    getIngredients(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listIngredientss = /* GraphQL */ `
  query ListIngredientss(
    $filter: ModelIngredientsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredientss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
