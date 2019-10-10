import { TAOS } from "./util/secrets";
import { runtimeLog as logger } from "./util/logger";

const taos = require('td-connector');
export const taosConn = taos.connect(TAOS)
export const taosCursor = taosConn.cursor();

// use livehub
try {
    taosCursor.execute('use livehub;');
    logger.info('Taos use livehub')
}
catch (err) {
    logger.info(err)
}
