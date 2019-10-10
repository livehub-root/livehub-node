import express from "express";
import bodyParser from "body-parser";
import { accessLogMid, errorLogMid } from "./middlewares/handleLog";

// Controllers (route handlers)
import * as heightController from "./controllers/height";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.text());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(accessLogMid)
// Primary app routes.
app.get("/height", heightController.get);
app.post("/height", heightController.post);

app.use(errorLogMid)

export default app
