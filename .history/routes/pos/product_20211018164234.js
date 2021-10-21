// Import our Controllers
const Product = require('../../controllers/pos/product')
module.exports = (server) => {
  server.get("/pos/product/new", async (request, reply) => {
    Product.index(request, reply);
  });
  server.get("/pos/product", async (request, reply) => {
    Product.fetchData(request, reply);
  }); 
  server.post("/pos/product", async (request, reply) => {
    Product.store(request, reply);
  });
  server.put("/pos/product/:id",  async (request, reply) => {
    Product.update(request, reply);
  });
  server.delete("/pos/product/:id", async (request, reply) => {
    Product.delete(request, reply);
  });
  server.get("/pos/product-list", async (request, reply) => {
    Product.productToOrder(request, reply);
  });
};