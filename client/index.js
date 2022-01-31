const $app = document.querySelector("#app");

axios.defaults.baseURL = "http://localhost:3003";

const products = await axios.get("/products");
const carts = await axios.get("/carts");
const orders = await axios.get("/orders");

console.log(products);
console.log(carts);
console.log(orders);
