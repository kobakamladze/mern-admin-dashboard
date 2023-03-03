import OverallStat from '../models/OverallStatModel.js';

class SalesController {
  async getgetSales(req, res) {
    try {
      // There is only one "object" in database
      const overallStats = await OverallStat.findOne();

      res.status(200).json(overallStats);
    } catch (e) {
      res.status(404).json({ eroormessage: e.message });
    }
  }
}

export default new SalesController();
