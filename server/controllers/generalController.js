import User from '../models/UserModel.js';
import OverallStat from '../models/OverAllStatModel.js';
import Product from '../models/ProductModel.js';
import ProductStat from '../models/ProductStatModel.js';
import Transaction from '../models/TransactionModel.js';

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

  // Fetch dashboard data
  async getDashboardData(req, res) {
    try {
      // hardcoded values
      const currentYear = 2021;
      const currentMonth = 'November';
      const currentDay = '2021-11-15';

      // Recent Transactions
      const transactions = await Transaction.find()
        .limit(50)
        .sort({ createdOn: -1 });

      // Overall Stats
      const [overallStat] = await OverallStat.find({ year: currentYear });

      const {
        totalCustomers,
        yearlyTotalSoldUnits,
        yearlySalesTotal,
        monthlyData,
        salesByCategory,
      } = overallStat;

      const thisMonthStats = overallStat.monthlyData.find(
        ({ month }) => month === currentMonth
      );

      const todayStats = overallStat.dailyData.find(
        ({ date }) => date === currentDay
      );

      res.status(200).json({
        todayStats,
        totalCustomers,
        transactions,
        monthlyData,
        yearlySalesTotal,
        yearlyTotalSoldUnits,
        salesByCategory,
        thisMonthStats,
      });
    } catch (e) {
      res.json(404).json({ message: e.message });
    }
  }
}

export default new GeneralControllers();
