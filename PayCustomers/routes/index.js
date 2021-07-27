const router = require('express').Router();
const {
  listCustomers,
  createCustomer,
  removeCustomer,
} = require('../controllers/customers');
const {
  listProducts,
  createProduct,
  removeProduct,
} = require('../controllers/products');
const { listPrices, createPrice } = require('../controllers/prices');
const {
  createPaymentMethod,
  getPaymentMethod,
  attachPaymentMethod,
} = require('../controllers/payment-methods');
const {
  listSubscriptions,
  createSubscription,
} = require('../controllers/subscriptions');

// CUSTOMERS
router.route('/customers').get(listCustomers).post(createCustomer);
router.route('/customers/:id').delete(removeCustomer);

// PRODUCTS
router.route('/products').get(listProducts).post(createProduct);
router.route('/products/:id').delete(removeProduct);

// PRICES
router.route('/prices').get(listPrices).post(createPrice);

// PAYMENT METHODS
router.route('/payment-methods').post(createPaymentMethod);
router
  .route('/payment-methods/:paymentId')
  .get(getPaymentMethod)
  .post(attachPaymentMethod);

// SUBSCRIPTIONS
router.route('/subscriptions').get(listSubscriptions).post(createSubscription);

module.exports = router;
