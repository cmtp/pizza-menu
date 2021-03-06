import API from "../api/api";

const URL_PIZZAS = "/pizzas";

const getPizzas = async (limit = 20, page = 0) => {
  const response = await API.get(`${URL_PIZZAS}?limit=${limit}&page=${page}`);
  if (response.error) {
    throw new Error("an error occurred");
  }
  return response;
};

const addPizza = async pizza => {
  const response = await API.post(`${URL_PIZZAS}`, pizza);
  if (response.error) {
    throw new Error("occurred while is creating");
  }
  return response;
};

const getPizza = async id => {
  const response = await API.get(`${URL_PIZZAS}/${id}`);
  if (response.error) {
    throw new Error("an error occurred");
  }
  return response;
};

const deletePizza = async id => {
  const response = await API.delete(`${URL_PIZZAS}/${id}`);
  if (response.error) {
    throw new Error("an error occurred while is deleting");
  }
  return response;
};

const updatePizza = async pizza => {
  const response = await API.put(`${URL_PIZZAS}/${pizza._id}`, pizza);
  if (response.error) {
    throw new Error("an error occurred while is updating");
  }
  return response;
};

const addToppingToPizza = async (pizzaId, toppingId) => {
  const response = await API.post(`${URL_PIZZAS}/${pizzaId}`, {
    topping: toppingId
  });
  if (response.error) {
    throw new Error("an error occurred while is updating");
  }
  return response;
};

const deleteToppingFromPizza = async (pizzaId, toppingId) => {
  const response = await API.put(`${URL_PIZZAS}/${pizzaId}`, {
    topping: toppingId
  });
  if (response.error) {
    throw new Error("an error occurred while is updating");
  }
  return response;
}

export default {
  getPizza,
  getPizzas,
  addPizza,
  deletePizza,
  updatePizza,
  addToppingToPizza,
  deleteToppingFromPizza
};
