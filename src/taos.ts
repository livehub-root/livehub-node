import { TAOS } from "./util/secrets";

const taos = require('td-connector');
export var taosConn = taos.connect(TAOS)
export var taosCursor = taosConn.cursor();