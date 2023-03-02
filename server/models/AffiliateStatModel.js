import mongoose from 'mongoose';

const AffiliateStatSchema = new mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
    transactions: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: 'Transaction',
    },
  },
  { timestamps: true }
);

const AffiliateStat = mongoose.model('AffiliateStat', AffiliateStatSchema);

export default AffiliateStat;
