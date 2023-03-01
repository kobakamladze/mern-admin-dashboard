import User from '../models/UserModel.js';

class ManagmentController {
  async getAdmins(req, res) {
    try {
      const admins = await User.find({ role: 'admins' }).select('-password');
      res.status(200).json(admins);
    } catch (e) {
      res.status(404).json({ message: e.message });
    }
  }
}

export default new ManagmentController();
