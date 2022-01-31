axios.defaults.baseURL = "http://localhost:3003";

/*
   GET  find All
*/

const products = await axios.get("/products");
const carts = await axios.get("/carts");
const orders = await axios.get("/orders");

console.log("findAll :", products);
console.log("findAll :", carts);
console.log("findAll :", orders);

/*
   GET  find by ID
*/

const product = await axios.get("/products/1");
const order = await axios.get("/orders/1");

console.log("findById :", product);
console.log("findById :", order);
