const fs = require("fs/promises");
const router = require("express").Router();
const userUseCases = require("../usecases/user");

router.get("/", async (req, res) => {
  try {
    const users = await userUseCases.getAll();
    res.json({ ok: true, payload: users });
  } catch (error) {
    console.log(error);
    res.status(400).json({ ok: false, message: error });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { name } = await userUseCases.getById(id);
    res.json({
      ok: true,
      payload: { name },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ ok: false, message: error });
  }
});

router.post("/", async (req, res) => {
  const { name } = req.body;

  try {
    const payload = await userUseCases.create(name);
    res.json({
      ok: true,
      message: "User created successfully",
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
  const { user } = req.body;

  try {
    const data = { user };
    const usuario = await userUseCases.update(id, data);
    res.json({ ok: true, payload: usuario });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = await userUseCases.del(id);

    res.json({ ok: true, payload: { user } });
  } catch (error) {
    console.log(error);
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});

module.exports = router;