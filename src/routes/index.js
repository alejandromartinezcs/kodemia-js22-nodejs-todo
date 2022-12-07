// USUARIOS
// CATEGORIAS
// TAREAS

// const usersRouter = require("./usersRouter");
const categoriesRouter = require("./categoriesRouter");
const tareasRouter = require("./tareasRouterDB");

const apiRouter = (app) => {
    // app.use("/usersRouter", usersRouter);
    app.use("/categories", categoriesRouter);
    app.use("/tareas", tareasRouter);
};

module.exports = apiRouter;