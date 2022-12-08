const User = require("../../models/user").model;

const getAll = async () => {
  return await User.find({}).exec();
};

const getById = async (id) => await User.findById(id).exec();

const create = async (name) => {
  const user = new User({ name });
  return await user.save();
};

const update = async (id, data) => {
  const { name } = data;

  data.name = name ? name : data.name;

  return await name.findByIdAndUpdate(id, data).exec();
};

const del = async (id) => await User.findByIdAndDelete(id).exec();

module.exports = {
  create,
  del,
  update,
  getById,
  getAll,
};