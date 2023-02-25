import Product from '../models/ProductModel.js';
import ProductStat from '../models/ProductStatModel.js';
import Transaction from '../models/TransactionModel.js';
import User from '../models/UserModel.js';

class GeneralControllers {
  // User methods
  async getUser(req, res) {
    try {
      const id = req.params.id;
      const user = await User.findById(id);

      if (!user) throw new Error();

      res.status(200).json(user);
    } catch (err) {}
  }

  // Product methods
  async getProducts(req, res) {
    try {
      const products = await Product.find().populate('productStat');
      return res.json(products);
    } catch (e) {
      return res.json(e);
    }
  }

  // Customers methods
  async getCustomers(req, res) {
    try {
      const products = await User.find({ role: 'user' }, '-password');
      return res.json(products);
    } catch (e) {
      return res.json(e);
    }
  }

  // Transaction methods
  async getTransactions(req, res) {
    try {
      const { limit = 20, page = 1 } = req.query;
      const offset = limit * page;

      const products = await Transaction.find().skip(offset).limit(limit);
      const count = await Transaction.countDocuments();

      return res.json({ count, products });
    } catch (e) {
      return res.json(e);
    }
  }
}

export default new GeneralControllers();
