import morgan from "morgan";
import { accessLogStream, errorLogStream } from "../util/logger";

export const accessLogMid = morgan('tiny', { stream: accessLogStream })
export const errorLogMid = morgan('tiny', { stream: errorLogStream })
