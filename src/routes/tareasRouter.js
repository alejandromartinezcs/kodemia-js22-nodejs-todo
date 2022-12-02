const { Router, json } = require('express');
const routes = Router();
const fs = require('fs/promises');

routes.get("/", async (req, res) => {
    const tareas = await fs.readFile("./MOCK_DATA.json");
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

routes.post("/", async (req, res) => {
      
    const tareas = await fs.readFile("./MOCK_DATA.json");
    const data = JSON.parse(tareas.toString());

    const id = req.body;
    const tarea = req.body;
    const estado = req.body;
    
    data.push({id, tarea, estado})

    const updateChore = await fs.writeFile("./MOCK_DATA.json", JSON.stringify(data))
  
    if (!data) {
      res.status(400).json({ message: "Chore data is required" });
    } else {
      res.status(201).json({
        ok: true,
        message: "Chore created",
        payload: updateChore,
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


