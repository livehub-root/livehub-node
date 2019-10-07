import express from "express";
import bodyParser from "body-parser";
// import taos from "td-connector";
import { TAOS } from "./util/secrets";

// Controllers (route handlers)
import * as heightController from "./controllers/height";

// Create Express server
const app = express();

// Connect to TDengine
// export const taosConn = taos.connect(TAOS)
// export const taosCursor = taosConn.cursor(); // Initializing a new cursor


// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.text());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Primary app routes.
 */

app.get("/height", heightController.get);
app.post("/height", heightController.post);


export default app