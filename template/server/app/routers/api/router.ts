import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

import itemsRouter from "./items/router";

router.use("/items", itemsRouter);

/* ************************************************************************* */

export default router;
