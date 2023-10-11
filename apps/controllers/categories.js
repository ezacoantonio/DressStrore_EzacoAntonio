const Category = require('../models/categories');

//create category
exports.createCategory = async (req, res) => {
    const category = new Category(req.body);
    await category.save();
    res.send(category);
  };

//list all categories 
exports.getCategories = async (req, res) => {
    const categories = await Category.find();
    res.status(200).send(categories);
  };

//list category by id
exports.getCategory = async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).send('Category not found');
    res.status(200).send(category);
  };

//update category by id
exports.updateCategory = async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) return res.status(404).send('Category not found');
    res.status(200).send(category);
  };

//delete category by id
exports.deleteCategory = async (req, res) => {
    const category = await Category.findByIdAndRemove(req.params.id);
    if (!category) return res.status(404).send('Category not found');
    res.status(200).send(category);
  };