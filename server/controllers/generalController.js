import Product from '../models/ProductModel.js';
import ProductStat from '../models/ProductStatModel.js';
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
  async getProduct(req, res) {
    try {
      const products = await Product.find().populate('productStat');
      return res.json(products);
    } catch (e) {
      return res.json(e);
    }
  }
}

export default new GeneralControllers();
