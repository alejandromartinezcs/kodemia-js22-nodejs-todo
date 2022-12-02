const { Router, json } = require('express');
const routes = Router();
const fs = require('fs/promises');

routes.get("/", async (req, res) => {
    const tareas = await fs.readFile("./MOCK_DATA.json");
    console.log(tareas)
    const data = JSON.parse(tareas.toString());
    res.json(data);
})

routes.get("/:id", async (req, res) => {
  
    const tareas = await fs.readFile("./MOCK_DATA.json")
    
    const dataJson = JSON.parse(tareas.toString())

    const data = dataJson.find((tarea) => {return tarea.id == req.params.id});

    if (data) {
      res.json(data);
      } else {
        res.status(404).json({ message: "Chore not found" });
      }
});

routes.post("/", (req, res) => {
    const data = req.body;

    const { id, tarea, estado } = data;
    const newChore = { id: 51, tarea, estado };
  
    if (!data) {
      res.status(400).json({ message: "Chore data is required" });
    } else {
      res.status(201).json({
        ok: true,
        message: "Chore created",
        payload: newChore,
      });
    }
});

routes.put("/:id", (req, res) => {
    res.json({ message: `Chore whit id ${req.params.id} modified` });
});

routes.delete("/:id", async (req, res) => {
    const { id } = req.params
    const fileContent = await fs.readFile("./MOCK_DATA.json")
    const chores = JSON.parse(fileContent.toString())

    const filter = chores.filter(element => element.id != id);

    const newChores = JSON.stringify(filter)

    fs.writeFile("./MOCK_DATA.json", newChores)
    

    res.json({ message: `Chore whit id ${req.params.id} deleted` });
});
  
module.exports = routes;


