const productType = require("../../controllers/pos/product_type");

module.exports = (server) => {
  server.get("/pos/product-type", async (req, res, next) => {
    productType.fetchData(req, res, next);
  });
  server.post("/pos/product-type", async (req, res, next) => {
    productType.store(req, res, next);
  });
  server.put("/pos/product-type/:id", async (req, res, next) => {
    productType.update(req, res, next);
  });
  server.delete("/pos/product-type/:id", async (req, res, next) => {
    productType.delete(req, res, next);
  });
};