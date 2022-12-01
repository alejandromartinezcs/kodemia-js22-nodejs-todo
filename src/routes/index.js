// USUARIOS
// CATEGORIAS
// TAREAS

// const usersRouter = require("./usersRouter");
// const categoriesRouter = require("./categoriesRouter");
const tareasRouter = require("./tareasRouter");

const apiRouter = (app) => {
    // app.use("./usersRouter.js", usersRouter);
    // app.use("./categoriesRouter.js", categoriesRouter);
    app.use("./tareasRouter.js", tareasRouter);
};

module.exports = apiRouter;