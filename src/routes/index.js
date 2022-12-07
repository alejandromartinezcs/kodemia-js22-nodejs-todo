// USUARIOS
// CATEGORIAS
// TAREAS

// const usersRouter = require("./usersRouter");
const categoriesRouter = require("./categoriesRouter");
const tareasRouter = require("./tareasRouter");

const apiRouter = (app) => {
    // app.use("./usersRouter", usersRouter);
    app.use("./categoriesRouter", categoriesRouter);
    app.use("/tareasRouter", tareasRouter);
};

module.exports = apiRouter;