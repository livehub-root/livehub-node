import { runtimeLog as logger } from "./logger";
import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
    logger.debug("Using .env file to supply config environment variables");
    dotenv.config({ path: ".env" });
} else {
    logger.debug("Using .env.example file to supply config environment variables");
    dotenv.config({ path: ".env.example" });  // you can delete this after you create your own .env file!
}

export const TAOS = {
    host: process.env["TAOS_HOST"],
    user: process.env["TAOS_USER"],
    password: process.env["TAOS_PASS"],
    config: process.env["TAOS_CONF"],
    port: process.env["TAOS_port"]
};

if (!TAOS) {
    logger.error("Secret is wrong, set TAOS failed.");
    process.exit(1);
}


