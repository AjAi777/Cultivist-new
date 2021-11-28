import asyncHandler from 'express-async-handler';
import Tree from '../models/treeModel.js';

// @desc    Fetch all products
// @route   GET /api/trees
// @access  Public
const getTrees = asyncHandler(async (req, res) => {
  const trees = await Tree.find({});
  res.json(trees);
});

// @desc    Fetch single products
// @route   GET /api/trees/:id
// @access  Public
const getTreeById = asyncHandler(async (req, res) => {
  const tree = await Tree.findById(req.params.id);
  if (tree) {
    res.json(tree);
  } else {
    res.status(404);
    throw new Error('Tree not found');
  }
});

export { getTrees, getTreeById };
