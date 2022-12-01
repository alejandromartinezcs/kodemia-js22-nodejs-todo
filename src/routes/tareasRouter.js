const { Router, json } = require('express');
const router = Router();
const fs = require('fs');
const tareas = process.argv[2];

fs.writeFile(tareas,"Creando archivo", {encoding : "utf8"},(err) =>{
    if(err) console.error("Ha ocurrido un error");
    else    console.log("Se ha creado el archivo: " + tareas);
});

routes.get("/", (req, res) => {
    res.json(tareas)
})

routes.get("/:id", (req, res) => {
    const data = tareas.find((tarea) => {
        return tarea.id == req.params.id;
    });

    if (data) {
        res.json(data);
      } else {
        res.status(404).json({ message: "Chore not found" });
      }
});

routes.post("/", (req, res) => {
    const data = req.body;
  
    // Lógica para crear un usuario con los datos obtenidos
  
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

routes.delete("/:id", (req, res) => {
  
    res.json({ message: `Chore whit id ${req.params.id} deleted` });
});
  
module.exports = routes;


