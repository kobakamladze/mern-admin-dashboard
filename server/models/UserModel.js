import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 30,
  },
  email: {
    type: String,
    required: true,
    uniqie: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  //   city: String,
  //   state: String,
  //   country: String,
  //   occupation: String,
  //   phoneNumber: { type: String, required: true },
  //   transactions: Array,
  role: {
    type: String,
    enum: ['user', 'admin', 'superadmin'],
    default: 'user',
  },
});

const User = mongoose.model('User', userSchema);
export default User;
