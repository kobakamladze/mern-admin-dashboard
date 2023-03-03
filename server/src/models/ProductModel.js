import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: String,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
    productStat: { type: mongoose.SchemaTypes.ObjectId, ref: 'ProductStat' },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);
export default Product;
