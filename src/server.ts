import errorHandler from "errorhandler";
import app from "./app";
import { taosConn } from "./taos";
import { runtimeLog as logger } from "./util/logger";

// Error Handler.
if (process.env.NODE_ENV !== 'production') {
    app.use(errorHandler());
}

// Start Express server.
const server = app.listen(app.get("port"), () => {
    logger.info('App is running');
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});



// End server.
process.on('exit', () => {
    taosConn.close();
    logger.info('App is end');
});
export default server;
