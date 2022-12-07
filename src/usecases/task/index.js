const Task = require("../../models/task").model;

const getAll = async () => {
  return await task.find({}).exec();
};

const getById = async (id) => await task.findById(id).exec();

const create = async (titulo) => {
  const task = new Task({ titulo });
  return await task.save();
};

const update = async (id, data) => {
  const { titulo, tarea, fecha } = data;

  data.titulo = titulo ? titulo : data.titulo;
  data.tarea = tarea ? tarea : data.tarea;
  data.fecha = fecha ? fecha : data.fecha;

  return await task.findByIdAndUpdate(id, data).exec();
};

const del = async (id) => await task.findByIdAndDelete(id).exec();

module.exports = {
  create,
  del,
  update,
  getById,
  getAll,
};