// backend/models/Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subCategories: [
    {
      type: String,
    },
  ],
});

const Category = mongoose.model('Category', categorySchema, 'category');
module.exports = Category;
