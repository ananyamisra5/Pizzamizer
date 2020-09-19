/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPizza = /* GraphQL */ `
  mutation CreatePizza(
    $input: CreatePizzaInput!
    $condition: ModelPizzaConditionInput
  ) {
    createPizza(input: $input, condition: $condition) {
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
export const updatePizza = /* GraphQL */ `
  mutation UpdatePizza(
    $input: UpdatePizzaInput!
    $condition: ModelPizzaConditionInput
  ) {
    updatePizza(input: $input, condition: $condition) {
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
export const deletePizza = /* GraphQL */ `
  mutation DeletePizza(
    $input: DeletePizzaInput!
    $condition: ModelPizzaConditionInput
  ) {
    deletePizza(input: $input, condition: $condition) {
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
export const createIngredients = /* GraphQL */ `
  mutation CreateIngredients(
    $input: CreateIngredientsInput!
    $condition: ModelIngredientsConditionInput
  ) {
    createIngredients(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateIngredients = /* GraphQL */ `
  mutation UpdateIngredients(
    $input: UpdateIngredientsInput!
    $condition: ModelIngredientsConditionInput
  ) {
    updateIngredients(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteIngredients = /* GraphQL */ `
  mutation DeleteIngredients(
    $input: DeleteIngredientsInput!
    $condition: ModelIngredientsConditionInput
  ) {
    deleteIngredients(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
