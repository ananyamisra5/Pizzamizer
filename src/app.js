import Amplify, { API, graphqlOperation } from "@aws-amplify/api";
import awsconfig from "./aws-exports";
import { createIngredients, createPizza } from "./graphql/mutations";
import { listIngredientss, listPizzas } from "./graphql/queries";
import { onCreateIngredients, onCreatePizza } from "./graphql/subscriptions";

Amplify.configure(awsconfig);

async function createNewIngredients() {
  const ingredient = {
    name: "Tomato Sauce",
    description: "Delicious tomato sauce from freshly tomatos",
  };

  return await API.graphql(
    graphqlOperation(createIngredients, { input: ingredient })
  );
}

async function createNewPizza(name, description){
  const Pizza = {
    name: "",
    description: "",
    ingredients: []
  }

  return await API.graphql(
    graphqlOperation(createPizza, { input: Pizza })
  )
}

async function getData() {
  API.graphql(graphqlOperation(listIngredientss)).then((evt) => {
    evt.data.listIngredientss.items.map((ingredient, i) => {
      QueryResult.innerHTML += `<p>${ingredient.name} - ${ingredient.description}</p>`;
    });
  });
}

async function getPizzas() {
  API.graphql(graphqlOperation(listPizzas)).then((ev) => {
    ev.data.listPizzas.items.map((pizza, p) => {
      QueryResult.innerHTML += `<p>${pizza.name} - ${pizza.description} - ${pizza.ingredient}</p>`;
    });
  });
}

const MutationButton = document.getElementById("MutationEventButton");
const MutationResult = document.getElementById("MutationResult");
const QueryResult = document.getElementById("QueryResult");
const SubscriptionResult = document.getElementById("SubscriptionResult");

MutationButton.addEventListener("click", (evt) => {
  createNewIngredients().then((evt) => {
    MutationResult.innerHTML += `<p>${evt.data.createIngredient.name} - ${evt.data.createIngredient.description}</p>`;
  });
});

API.graphql(graphqlOperation(onCreateIngredients)).subscribe({
  next: (evt) => {
    const Ingredient = evt.value.data.onCreateIngredients;
    SubscriptionResult.innerHTML += `<p>${Ingredient.name} - ${Ingredient.description}</p>`;
  },
});

getData();
