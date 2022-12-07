const fs = require("fs/promises");
const router = require("express").Router();
const taskUseCases = require("../usecases/task");

router.get("/", async (req, res) => {
  try {
    const tarea = await taskUseCases.getAll();
    res.json({ ok: true, payload: tarea });
  } catch (error) {
    res.status(400).json({ ok: false, message: error });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { titulo, tarea } = await taskUseCases.getById(id);
    res.json({
      ok: true,
      payload: { titulo, tarea, fecha},
    });
  } catch (error) {
    res.status(400).json({ ok: false, message: error });
  }
});

router.post("/", async (req, res) => {
  const { titulo } = req.body;
  const { tarea } = req.body;
  const { fecha } = req.body;

  try {
    const payload = await taskUseCases.create(titulo);
    res.json({
      ok: true,
      message: "Task created successfully",
      payload,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: error,
    });
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { titulo, tarea } = req.body;

  try {
    const data = { titulo, tarea };
    const tareas = await taskUseCases.update(id, data);
    res.json({ ok: true, payload: tareas });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, tarea } = await taskUseCases.del(id);

    res.json({ ok: true, payload: { titulo, tarea } });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});

module.exports = router;