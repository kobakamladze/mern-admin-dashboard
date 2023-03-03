import mongoose from 'mongoose';

import User from '../models/UserModel.js';
import Transaction from '../models/TransactionModel.js';

class ManagmentController {
  async getAdmins(req, res) {
    try {
      const admins = await User.find({ role: 'admin' }).select('-password');
      res.status(200).json(admins);
    } catch (e) {
      res.status(404).json({ message: e.message });
    }
  }

  async getUserPerformance(req, res) {
    try {
      const userId = req.params.id;

      const userStats = await User.aggregate([
        { $match: { _id: new mongoose.Types.ObjectId(userId) } },
        {
          $lookup: {
            from: 'affiliatestats',
            localField: '_id',
            foreignField: 'user',
            as: 'transactions',
          },
        },
        { $unwind: '$transactions' },
      ]);

      // user password remove
      delete userStats[0].password;

      const transactions = await Transaction.find({
        _id: {
          $in: userStats[0].transactions.transactions.map(id =>
            mongoose.Types.ObjectId(id)
          ),
        },
      });

      const filteredTransactions = transactions.filter(
        transaction => transaction !== null
      );

      res.status(200).json({ user: userStats[0], sales: filteredTransactions });
    } catch (e) {
      res.status(404).json({ message: e.message });
    }
  }
}

export default new ManagmentController();
