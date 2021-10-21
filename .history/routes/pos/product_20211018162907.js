// Import our Controllers
const Product = require('../../controllers/pos/product')

const routes = [
  {
    method: 'GET',
    url: '/pos/product/new',
    handler: Product.index
  },
  {
    method: 'GET',
    url: '/pos/product',
    handler: Product.fetchData
  },
  {
    method: 'post',
    url: '/pos/product',
    handler: Product.store
  },
  {
    method: 'put',
    url: '/pos/product/:id',
    handler: Product.update
  },
  {
    method: 'delete',
    url: '/pos/product/:id',
    handler: Product.delete
  },
  {
    method: 'get',
    url: '/pos/product-list',
    handler: Product.productToOrder
  },
 
]

module.exports = routes